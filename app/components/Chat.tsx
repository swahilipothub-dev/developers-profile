'use client';
import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');
        setSocket(ws);

        ws.onmessage = (event) => {
            // Check if the received data is a Blob
            if (event.data instanceof Blob) {
                event.data.text().then((text) => {
                    setMessages((prev) => [...prev, text]);
                });
            } else {
                setMessages((prev) => [...prev, event.data]);
            }
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket server.');
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (socket && input.trim()) {
            socket.send(input);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
