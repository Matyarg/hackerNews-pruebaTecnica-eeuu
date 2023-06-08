import useSWR from 'swr'
import { Link } from "wouter";
import { getItemInfo } from '../services/hacker-news'
import { smallLink, story, storyFooter, storyHeader, storyTitle } from './Story.css'
import { StoryLoader } from './StoryLoader';

export const Story = (props: {
    id: number
    index: number
}) => {
    const { id, index } = props
    const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(id))
    if (isLoading) {
        return (<StoryLoader />)
    }

    const { by, kids, score, title, url } = data
    console.log(data)

    let domain = ''
    try {
        domain = new URL(url).hostname.replace('www.', '')
    } catch (error) { }

    return (
        <article className={story}>
            <header className={storyHeader}>
                <small>{index + 1}  .</small>
                <a
                    className={storyTitle}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {title}
                </a>
                <a
                    className={smallLink}
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {domain}
                </a>
            </header>
            <footer className={storyFooter}>
                <span>{score} Points</span>
                <Link className={smallLink} href={`/article/${id}`}>
                    by {by}
                </Link>
                <Link className={smallLink} href={`/article/${id}`}>
                    6 hours ago
                </Link>
                <Link className={smallLink} href={`/article/${id}`}>
                    {kids?.length ?? 0} commends
                </Link>
            </footer>
        </article>
    )
}