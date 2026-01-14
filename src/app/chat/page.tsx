import ChatWindow from "@/components/shared/ChatWindow";

export default function ChatPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Interactive AI Chat</h1>
        <p className="text-gray-600 mt-2">Test my AI capabilities or ask questions about my work.</p>
      </div>
      
      <ChatWindow />
    </div>
  );
}