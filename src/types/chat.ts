export interface Message {
    id: string;
    content: string;
    sender: "user" | "ai";
    timestamp: Date;
  }
  
  export interface ChatInterfaceProps {
    hasStartedChat: boolean;
    setHasStartedChat: (val: boolean) => void;
  }