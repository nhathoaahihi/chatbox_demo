/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";

const MessageParser = ({ children, actions }) => {
  const messageContainerRef = useRef(null);
  const parse = (message) => {
    actions.handleUserMessage(message);
  };
  useEffect(() => {
    // Scroll to the bottom whenever new messages are added
    const scrollToBottom = () => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [children, actions.handleUserMessage]); // Update on children or handleUserMessage changes

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
