import ChatContainer from "../../components/chat/ChatContainer"
import Sidebar from "../../components/sidebar/Sidebar"

function Home() {
  return (
    <div className="flex flex-col sm:flex-row w-[90vw] sm:w-auto h-[90vh] sm:h-[450px] md:h-[550px] rounded-[7px] overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5">
      <Sidebar/>
      <span className="divider divider-primary relative h-[0.1px] bottom-[12px]"></span>
      <ChatContainer/>
    </div>
  )
}

export default Home