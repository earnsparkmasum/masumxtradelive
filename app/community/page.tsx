'use client';

import React, { useState } from 'react';
import { 
  Users, MessageSquare, ThumbsUp, Share2, Pin, Send, 
  Sparkles, ShieldCheck, Heart, Trash2, Award 
} from 'lucide-react';

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 'p1',
      authorName: 'Masum Ahmed (Admin)',
      authorRole: 'Founder & Head Trader',
      authorPhoto: null,
      content: '🚨 PINNED ANNOUNCEMENT: Tonight we have high impact USD Core Retail Sales news at 6:30 PM BST. We strongly recommend moving all your stop losses to break-even or closing active positions 15 minutes before the release. Capital preservation is priority #1! 🛡️',
      pinned: true,
      likes: ['u1', 'u2', 'u3', 'u4'],
      likedByMe: true,
      comments: [
        { id: 'c1', authorName: 'Zahid Khan', content: 'Thanks for the timely warning, Masum bhai! Saved my account last week.' },
        { id: 'c2', authorName: 'Rashedul Islam', content: 'Excellent advice. I will stay flat tonight during NY open.' }
      ],
      createdAt: '2 hours ago'
    },
    {
      id: 'p2',
      authorName: 'Mohammad Rahim',
      authorRole: 'Lifetime Member',
      authorPhoto: null,
      content: 'Just smashed my 1:3 Risk Reward target on EURUSD today using the London Breakout Strategy! Entered on the 5-minute FVG retest. Absolute masterpiece of a setup! 📈🔥',
      pinned: false,
      likes: ['u5', 'u6'],
      likedByMe: false,
      comments: [
        { id: 'c3', authorName: 'Masum Ahmed', content: 'Incredible execution, Rahim! Beautiful patience on that FVG retest.' }
      ],
      createdAt: '4 hours ago'
    }
  ]);

  const [newPostContent, setNewPostContent] = useState('');
  const [commentInputs, setCommentInputs] = useState<{ [postId: string]: string }>({});

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: `p-${Date.now()}`,
      authorName: 'Guest Trader (You)',
      authorRole: 'Free Member',
      authorPhoto: null,
      content: newPostContent,
      pinned: false,
      likes: [],
      likedByMe: false,
      comments: [],
      createdAt: 'Just now'
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          likedByMe: !p.likedByMe,
          likes: p.likedByMe 
            ? p.likes.filter(id => id !== 'me') 
            : [...p.likes, 'me']
        };
      }
      return p;
    }));
  };

  const handleAddComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const commentText = commentInputs[postId];
    if (!commentText || !commentText.trim()) return;

    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: `c-${Date.now()}`,
              authorName: 'Guest Trader (You)',
              content: commentText,
              createdAt: 'Just now'
            }
          ]
        };
      }
      return p;
    }));

    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Hero Telegram CTA */}
      <div className="glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-trading-gold/20 mb-10 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-gold-glow">
        <div className="absolute top-0 right-0 w-32 h-32 bg-trading-gold/5 rounded-full blur-2xl"></div>
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-2.5 py-1 rounded-md border border-trading-gold/20 inline-block uppercase">
            Official Community
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">Join 15K+ Active Telegram Traders</h2>
          <p className="text-xs text-gray-400">Receive instant signals, news updates, and custom alert scripts directly to your phone.</p>
        </div>
        <a
          href="https://t.me/masumxtrade"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 rounded-xl font-bold bg-gold-gradient text-black hover:brightness-110 transition duration-300 text-xs flex items-center space-x-2 shrink-0 shadow-lg"
        >
          <Send className="w-4 h-4" />
          <span>Join Free Telegram</span>
        </a>
      </div>

      <div className="space-y-8">
        
        {/* Create Post Form */}
        <form onSubmit={handleCreatePost} className="glass-luxury-panel p-5 rounded-2xl border border-white/5 space-y-4">
          <textarea
            placeholder="Share your technical setups, chart markup, or ask a question to MasumX..."
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-trading-gold min-h-[100px] resize-y"
          ></textarea>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-500">Posting publicly in general feedback channel</span>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-bold bg-trading-gold text-black hover:brightness-110 transition text-xs flex items-center space-x-2"
            >
              <span>Share Setup</span>
            </button>
          </div>
        </form>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`glass-luxury-panel p-6 rounded-2xl border flex flex-col justify-between transition ${
                post.pinned 
                  ? 'border-trading-gold/30 bg-trading-gold/5 shadow-gold-glow' 
                  : 'border-white/5'
              }`}
            >
              {/* Post Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white uppercase text-sm">
                    {post.authorName[0]}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      {post.authorName}
                      {post.pinned && <Pin className="w-3.5 h-3.5 text-trading-gold fill-current" />}
                    </h3>
                    <span className="text-[10px] text-gray-400 block">{post.authorRole} • {post.createdAt}</span>
                  </div>
                </div>
                {post.pinned && (
                  <span className="text-[9px] font-black text-trading-gold bg-trading-gold/10 px-2 py-0.5 rounded border border-trading-gold/20 uppercase">
                    Admin Pinned
                  </span>
                )}
              </div>

              {/* Post Content */}
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-6 white-space-pre-wrap">{post.content}</p>

              {/* Engagement Buttons */}
              <div className="flex items-center space-x-4 border-y border-white/5 py-3 mb-4 text-xs text-gray-400">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-1.5 transition ${
                    post.likedByMe ? 'text-trading-bearish' : 'hover:text-white'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${post.likedByMe ? 'fill-current' : ''}`} />
                  <span>{post.likes.length} Likes</span>
                </button>
                <div className="flex items-center space-x-1.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.comments.length} Comments</span>
                </div>
                <button className="flex items-center space-x-1.5 hover:text-white transition">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Comments Section */}
              <div className="space-y-3 mb-4">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-white/5 p-3 rounded-xl border border-white/5 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-white">{comment.authorName}</span>
                      <span className="text-[9px] text-gray-500">Just now</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{comment.content}</p>
                  </div>
                ))}
              </div>

              {/* Comment Input */}
              <form
                onSubmit={(e) => handleAddComment(post.id, e)}
                className="flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Write a supportive comment..."
                  value={commentInputs[post.id] || ''}
                  onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                  className="flex-grow bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-trading-gold/30 hover:bg-trading-gold/10 hover:text-trading-gold transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}