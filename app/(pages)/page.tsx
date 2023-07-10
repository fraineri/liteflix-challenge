import { getAuthSession } from "@/lib/authOptions"

const Home = async () => {
    const session = await getAuthSession()
    return (
        <div>
            <h1>HEY</h1>
        </div>
    )

}

export default Home