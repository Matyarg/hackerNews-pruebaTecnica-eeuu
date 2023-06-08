import ContentLoader from "react-content-loader"
export const StoryLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={600}
            height={60}
            viewBox="0 0 600 60"
            backgroundColor="#f3f3f3"
            foregroundColor="#f6e4ba"
        >
            <circle cx="34" cy="24" r="10" />
            <rect x="272" y="8" rx="3" ry="3" width="128" height="13" />
            <rect x="49" y="8" rx="3" ry="3" width="219" height="13" />
            <rect x="22" y="38" rx="3" ry="3" width="61" height="13" />
            <rect x="89" y="38" rx="3" ry="3" width="61" height="13" />
            <rect x="154" y="38" rx="3" ry="3" width="66" height="13" />
            <rect x="227" y="38" rx="3" ry="3" width="79" height="13" />
        </ContentLoader>
    )
}