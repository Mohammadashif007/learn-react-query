import { useQuery, useMutation } from "@tanstack/react-query";

const POST = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
];

function App() {
    // useQuery({
    //   queryKey: ['posts']
    // })
    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => wait(1000).then(() => [...POST]),
    });

    if (postQuery.isLoading) return <h1>Loading...</h1>;
    if (postQuery.isError) {
        return <pre>{JSON.stringify(postQuery.error)}</pre>;
    }

    return <div>
      {postQuery.data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
}

function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
