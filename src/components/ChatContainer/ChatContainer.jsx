import ChatDisplay from "../ChatDisplay/ChatDisplay";
import ChatHeader from "../ChatHeader/ChatHeader";
import MatchesDisplay from "../MatchesDisplay/MatchesDisplay";

const ChatContainer = ({ user }) => {
  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer;
