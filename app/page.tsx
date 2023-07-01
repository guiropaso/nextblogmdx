import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'


// applies to the rest of the tree if this is a page
export const revalidate = 86400


export default async function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Guillermo</span>.
        </span>
      </p>
      <Posts />
    </div>
  )
}
