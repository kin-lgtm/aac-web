// src/pages/Blog.tsx
import { useState } from 'react';
import { Search, Calendar, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Posts', count: 12 },
    { value: 'technology', label: 'Technology', count: 4 },
    { value: 'sustainability', label: 'Sustainability', count: 3 },
    { value: 'crops', label: 'Crops', count: 3 },
    { value: 'farmers', label: "Farmers' Voices", count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Smart Farming in Asia: IoT and AI Revolution',
      excerpt: 'Explore how Internet of Things sensors and Artificial Intelligence are transforming traditional farming practices across Asian countries, making agriculture more efficient and sustainable.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600',
      category: 'technology',
      author: 'Dr. Rajitha Silva',
      date: 'October 15, 2025',
      readTime: '8 min read',
      tags: ['IoT', 'AI', 'Smart Farming'],
    },
    {
      id: 2,
      title: 'Complete Guide to Organic Certification for Small Farmers',
      excerpt: 'Step-by-step guide covering everything you need to know about obtaining organic certification, from documentation to compliance and market access opportunities.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600',
      category: 'sustainability',
      author: 'Priya Jayawardena',
      date: 'October 10, 2025',
      readTime: '12 min read',
      tags: ['Organic', 'Certification', 'Sustainability'],
    },
    {
      id: 3,
      title: '10 Essential Water Management Tips for Rice Farmers',
      excerpt: 'Practical water conservation strategies that can reduce consumption by up to 40% while maintaining or improving crop yields in rice cultivation.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600',
      category: 'crops',
      author: 'Nimal Fernando',
      date: 'October 5, 2025',
      readTime: '6 min read',
      tags: ['Water Management', 'Rice', 'Conservation'],
    },
    {
      id: 4,
      title: 'Climate-Resilient Farming: Adapting to Changing Weather Patterns',
      excerpt: 'Learn about climate-smart agriculture practices that help farmers adapt to unpredictable weather while maintaining productivity and profitability.',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600',
      category: 'sustainability',
      author: 'Dr. Rajitha Silva',
      date: 'September 28, 2025',
      readTime: '10 min read',
      tags: ['Climate Change', 'Resilience', 'Adaptation'],
    },
    {
      id: 5,
      title: 'Success Story: How Drone Technology Increased My Yield by 35%',
      excerpt: 'A farmer shares his experience implementing drone-based crop monitoring and precision spraying, resulting in significant yield improvements and cost savings.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600',
      category: 'farmers',
      author: 'Sunil Perera',
      date: 'September 20, 2025',
      readTime: '7 min read',
      tags: ['Drones', 'Success Story', 'Technology'],
    },
    {
      id: 6,
      title: 'Soil Health: The Foundation of Sustainable Agriculture',
      excerpt: 'Understanding soil composition, nutrient cycles, and practical methods to improve soil health for long-term agricultural productivity.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600',
      category: 'sustainability',
      author: 'Nimal Fernando',
      date: 'September 15, 2025',
      readTime: '9 min read',
      tags: ['Soil Health', 'Nutrients', 'Sustainability'],
    },
    {
      id: 7,
      title: 'Tea Plantation Management: Modern Techniques for Quality',
      excerpt: 'Latest innovations in tea cultivation, from pruning techniques to processing methods that enhance quality and market value.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600',
      category: 'crops',
      author: 'Chaminda Perera',
      date: 'September 8, 2025',
      readTime: '11 min read',
      tags: ['Tea', 'Quality', 'Management'],
    },
    {
      id: 8,
      title: 'Integrated Pest Management: Reducing Chemical Dependency',
      excerpt: 'Explore eco-friendly pest control strategies that protect crops while minimizing environmental impact and reducing costs.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600',
      category: 'technology',
      author: 'Priya Jayawardena',
      date: 'August 30, 2025',
      readTime: '8 min read',
      tags: ['IPM', 'Pest Control', 'Organic'],
    },
    {
      id: 9,
      title: 'Market Trends 2025: What Crops Are in High Demand?',
      excerpt: 'Analysis of current market trends, export opportunities, and crop predictions for farmers planning their next season.',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600',
      category: 'crops',
      author: 'Dr. Rajitha Silva',
      date: 'August 22, 2025',
      readTime: '10 min read',
      tags: ['Market Trends', 'Economics', 'Planning'],
    },
    {
      id: 10,
      title: 'From Conventional to Organic: A Farmer\'s Journey',
      excerpt: 'Personal account of transitioning from chemical-intensive farming to certified organic production, including challenges and rewards.',
      image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5?w=600',
      category: 'farmers',
      author: 'Lakshmi Fernando',
      date: 'August 15, 2025',
      readTime: '6 min read',
      tags: ['Organic', 'Transition', 'Personal Story'],
    },
    {
      id: 11,
      title: 'Blockchain in Agriculture: Traceability and Transparency',
      excerpt: 'How blockchain technology is revolutionizing supply chain management, ensuring product authenticity and fair pricing for farmers.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600',
      category: 'technology',
      author: 'Priya Jayawardena',
      date: 'August 8, 2025',
      readTime: '9 min read',
      tags: ['Blockchain', 'Supply Chain', 'Technology'],
    },
    {
      id: 12,
      title: 'Vertical Farming: The Future of Urban Agriculture',
      excerpt: 'Introduction to vertical farming systems and their potential for urban food production in space-constrained Asian cities.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600',
      category: 'technology',
      author: 'Chaminda Perera',
      date: 'August 1, 2025',
      readTime: '7 min read',
      tags: ['Vertical Farming', 'Urban Agriculture', 'Innovation'],
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 via-orange-800/90 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl  mb-6">Blog & News</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Latest insights, tips, and updates from the world of agriculture
            </p>
            
            {/* Search Bar */}
            
          </div>
        </div>
      </section>
      <div className="max-w-2xl mx-auto mt-20">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-400 w-full pl-12 pr-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl  text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === category.value
                          ? 'bg-orange-100 text-orange-800'
                          : 'hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.label}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.value ? 'text-orange-800' : 'text-orange-800'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl  text-gray-800 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['IoT', 'Sustainability', 'Organic', 'Smart Farming', 'Climate', 'Technology'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 text-gray-600">
                Showing {filteredPosts.length} of {blogPosts.length} articles
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                          {categories.find(c => c.value === post.category)?.label}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl  text-gray-800 mb-3 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                        </div>
                        <button className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                          Read
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex gap-2 mt-4 flex-wrap">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-600">No articles found matching your search.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-primary-600 font-semibold hover:text-primary-700"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      
    </div>
  );
};
export default Blog;