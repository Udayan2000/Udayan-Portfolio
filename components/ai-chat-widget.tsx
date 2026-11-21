'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquareIcon, XIcon, SendIcon, SparklesIcon, CheckCircleIcon } from '@/components/ui/icons';
import { API_ENDPOINTS } from '@/lib/api-config';

interface Message {
  id: string;
  role: 'user' | 'model' | 'human';
  text: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  "What's your typical website turnaround?",
  "Can you build a custom WordPress site?",
  "Do you build e-commerce with Stripe?",
  "What are your client guarantees?",
];

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyTypingId, setCurrentlyTypingId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear typing timers on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, []);

  // Initialize or restore session ID from localStorage
  useEffect(() => {
    let storedSession = '';
    try {
      storedSession = localStorage.getItem('portfolio_chat_session') || '';
      if (!storedSession) {
        storedSession = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
        localStorage.setItem('portfolio_chat_session', storedSession);
      }
      setSessionId(storedSession);

      // Try fetching previous history
      fetch(API_ENDPOINTS.chatHistory(storedSession))
        .then((r) => r.json())
        .then((data) => {
          if (data.success && data.data?.messages && data.data.messages.length > 0) {
            setMessages(data.data.messages);
          } else {
            // Default initial welcome message
            setMessages([
              {
                id: 'welcome',
                role: 'model',
                text: "Hi! I'm Udayan's AI assistant. Whether you need a high-speed business website, e-commerce store, or custom web application, feel free to ask me anything about his work, pricing, or timelines!",
                timestamp: new Date().toISOString(),
              },
            ]);
          }
        })
        .catch(() => {
          setMessages([
            {
              id: 'welcome',
              role: 'model',
              text: "Hi! I'm Udayan's AI assistant. Feel free to ask about his web development services, project timelines, or guarantees!",
              timestamp: new Date().toISOString(),
            },
          ]);
        });
    } catch {
      // In case localStorage is blocked
      const fallbackId = `sess_${Date.now()}`;
      setSessionId(fallbackId);
    }
  }, []);

  // Auto scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading, currentlyTypingId]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    setInputValue('');
    const tempUserId = `user_${Date.now()}`;
    const userMsg: Message = {
      id: tempUserId,
      role: 'user',
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.chatMessage, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          message: text,
          visitorName: visitorName || undefined,
          visitorEmail: visitorEmail || undefined,
        }),
      });

      const result = await response.json();

      if (result.success && result.data) {
        const replyId = result.data.modelMessage?.id || `reply_${Date.now()}`;
        const fullReplyText = result.data.reply || '';
        const role = result.data.role || 'model';

        // Add model message container with empty string
        setMessages((prev) => [
          ...prev,
          {
            id: replyId,
            role,
            text: '',
            timestamp: new Date().toISOString(),
          },
        ]);

        // Stop 3-dot drafting beacon, start typing out text at natural slower human cadence
        setIsLoading(false);
        setCurrentlyTypingId(replyId);

        let charIdx = 0;
        const typeNextChar = () => {
          if (charIdx < fullReplyText.length) {
            charIdx++;
            const slice = fullReplyText.slice(0, charIdx);
            setMessages((prev) =>
              prev.map((m) => (m.id === replyId ? { ...m, text: slice } : m))
            );

            const lastChar = fullReplyText[charIdx - 1];
            // Slow typing cadence: 34ms base, with thoughtful natural pauses on punctuation
            const delay =
              lastChar === '.' || lastChar === '!' || lastChar === '?'
                ? 170
                : lastChar === ',' || lastChar === ';'
                ? 95
                : 34;

            typingTimerRef.current = setTimeout(typeNextChar, delay);
          } else {
            setCurrentlyTypingId(null);
            if (!isOpen) setHasUnread(true);
          }
        };

        typingTimerRef.current = setTimeout(typeNextChar, 80);
      } else {
        throw new Error(result.message || 'Failed to get reply');
      }
    } catch (err: any) {
      setIsLoading(false);
      const errorMsg: Message = {
        id: `err_${Date.now()}`,
        role: 'model',
        text: "I had a momentary connection issue generating your response. Please try sending your message again!",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Launcher Pill (Bottom-Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Chat Assistant"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-[4px] bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-[#06b6d4] transition-all group select-none cursor-pointer realistic-card"
        >
          {/* Pulsing Beacon */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>

          <div className="flex items-center gap-1.5 text-left">
            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#06b6d4] transition-colors">
              Chat with Udayan
            </span>
            {/* <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-[3px] bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30 font-semibold">
              AI Live
            </span> */}
          </div>

          <div className="w-6 h-6 rounded-[4px] bg-[#0219ac] text-white flex items-center justify-center shrink-0 ml-1">
            <MessageSquareIcon className="w-3.5 h-3.5" />
          </div>

          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-rose-500 border-2 border-white dark:border-zinc-900" />
          )}
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[390px] h-[540px] max-h-[85vh] flex flex-col rounded-[4px] realistic-card bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 overflow-hidden select-none animate-fadeIn">
          
          {/* Header */}
          <div className="h-[52px] px-3.5 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-[4px] bg-gradient-to-tr from-[#0219ac] to-[#06b6d4] text-white font-extrabold text-xs flex items-center justify-center">
                  UG
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-zinc-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    Udayan Ghosh
                  </span>
                 
                </div>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block leading-tight">
                  Replies instantly • Phone alerted
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="w-7 h-7 rounded-[4px] flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-zinc-50/50 dark:bg-zinc-950/50">
            
            {/* Starter Chips (Only visible when starting conversation) */}
            {messages.length <= 1 && (
              <div className="space-y-1.5 pt-1 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Quick Questions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {STARTER_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-[11px] text-left px-2.5 py-1 rounded-[4px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#06b6d4] text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors leading-tight"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Thread */}
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              const isHuman = msg.role === 'human';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-[4px] text-xs leading-relaxed ${
                      isUser
                        ? 'bg-[#0219ac] text-white'
                        : isHuman
                        ? 'bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-zinc-900 dark:text-zinc-100'
                        : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200'
                    }`}
                  >
                    {!isUser && (
                      <div className="flex items-center gap-1 mb-1 text-[9px] font-mono">
                        {isHuman ? (
                          <span className="font-bold text-[#06b6d4] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                            Udayan (Live Reply)
                          </span>
                        ) : (
                          <span className="text-zinc-400 font-semibold flex items-center gap-1">
                            <SparklesIcon className="w-3 h-3 text-[#06b6d4]" />
                            AI Assistant
                          </span>
                        )}
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">
                      {msg.text}
                      {currentlyTypingId === msg.id && (
                        <span className="inline-block w-1.5 h-3 ml-0.5 bg-[#06b6d4] animate-pulse align-middle" />
                      )}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-1.5 p-2 rounded-[4px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] font-mono text-zinc-400 ml-1">Drafting reply...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-2.5 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shrink-0 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  currentlyTypingId
                    ? "Udayan is typing reply..."
                    : "Ask about project, timeline, scope..."
                }
                disabled={isLoading || Boolean(currentlyTypingId)}
                className="flex-1 text-xs px-3 h-[44px] rounded-[4px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 focus:border-[#06b6d4] outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 disabled:opacity-70"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || Boolean(currentlyTypingId) || !inputValue.trim()}
                aria-label="Send Message"
                className="w-[44px] h-[44px] rounded-[4px] bg-[#0219ac] hover:bg-[#0219ac]/90 disabled:opacity-50 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <SendIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 px-1 font-mono">
              <span className="flex items-center gap-1">
                <CheckCircleIcon className="w-3 h-3 text-[#06b6d4]" />
                <span>Udayan alerted on phone</span>
              </span>
              <span>100% Free Chat</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
