import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { ListOfComments } from '../components/ListOfComments'

export default function DetailPage(props: {
    params: {
        id: string
    }
}) {
    const { params: { id } } = props
    const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(Number(id)))

    const commentIds = data?.kids.slice(0, 10) ?? []

    return (
        <div>
            {
                isLoading ? <p> Loading... </p> : <ListOfComments ids={commentIds} />
            }
        </div>
    )
}