// import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { useEffect, useRef } from 'react';
import { getTopStories } from '../services/hacker-news'
import { Story } from "../components/Story";
export default function TopStoriesPage() {

    // const { data, isLoading } = useSWR('stories', () => getTopStories(1, 6))
    const { data, isLoading, size, setSize } = useSWRInfinite(
        (index) => `stories/${index + 1}`,
        (key) => {
            const [, page] = key.split('/')
            return getTopStories(Number(page), 10)
        }
    )

    const stories = data?.flat()

    const campana = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setSize(size + 1)
            }
        })

        if (campana.current == null) {
            return
        }

        observer.observe(campana.current)

        return () => {
            observer.disconnect()
        }
    }, [isLoading, setSize])


    return (
        <>
            <ul style={{ listStyle: 'none' }}>
                {stories?.map((id: number, index: number) => (
                    <li key={id}>
                        <Story id={id} index={index} />
                    </li>
                ))}
            </ul>
            {!isLoading && <span ref={campana} >.</span>}
            {/* <button onClick={() => setSize(size + 1)}>
                Load more
            </button> */}
        </>
    )
}