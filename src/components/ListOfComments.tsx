import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
const Comment = (props: {
    id: number
}) => {
    const { id } = props
    const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(Number(id)))

    if (isLoading) {
        return <p>Loading...</p>
    }

    const { by, text, time, kids } = data

    const newtime: Date = new Date(time * 1000)

    return (
        <>
            <article>
                <header>
                    <small>
                        <span>{by}</span>
                        <span> - </span>
                        <span> 3 Hours Ago</span>
                    </small>
                </header>
                <p>{text}</p>
            </article>
            {
                kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />
            }
        </>
    )
}

export const ListOfComments = (props: {
    ids: number[]
}) => {
    const { ids } = props
    return (
        <ul>
            {
                ids?.map((id: number) => (
                    <li key={id}>
                        <Comment id={id}></Comment>
                    </li>
                ))
            }
        </ul>
    )
}