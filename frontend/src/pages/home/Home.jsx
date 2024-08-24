import ChatContainer from "../../components/chat/ChatContainer"
import Sidebar from "../../components/sidebar/Sidebar"

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-[7px] overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
      <Sidebar/>
      <ChatContainer/>
    </div>
  )
}

export default Home