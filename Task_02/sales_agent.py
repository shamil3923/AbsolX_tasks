import streamlit as st
from phi.agent import Agent
from phi.model.google import Gemini
from phi.tools.duckduckgo import DuckDuckGo
from dotenv import load_dotenv
from tenacity import retry, stop_after_attempt, wait_exponential
import os
from datetime import datetime

load_dotenv()

# Configure page
st.set_page_config(
    page_title="AI Sales Agent Pro",
    page_icon="🤖",
    layout="centered"
)
st.title("💼 Sales Agent")
st.markdown("Powered by Gemini Pro & Market Analytics")

# Expanded Product Catalog
PRODUCT_CATALOG = {
    "Smartphone X": {
        "price": 699,
        "features": ["6.5\" AMOLED", "128GB storage", "48MP camera", "5G connectivity"],
        "category": "electronics",
        "stock": 15,
        "trend_score": 4.8
    },
    "Laptop Pro": {
        "price": 1299,
        "features": ["15.6\" 4K Display", "Intel Core i9", "32GB RAM", "1TB SSD"],
        "category": "electronics",
        "stock": 8,
        "trend_score": 4.7
    },
    "Smartwatch Ultra": {
        "price": 349,
        "features": ["ECG Monitor", "GPS", "Waterproof", "30-day battery"],
        "category": "wearables",
        "stock": 22,
        "trend_score": 4.6
    },
    "Wireless Earbuds Pro": {
        "price": 199,
        "features": ["Active Noise Cancellation", "Spatial Audio", "30hr playtime"],
        "category": "audio",
        "stock": 35,
        "trend_score": 4.9
    },
    "4K Smart TV": {
        "price": 899,
        "features": ["55\" Display", "HDR10+", "Smart Hub", "Voice Control"],
        "category": "home-entertainment",
        "stock": 12,
        "trend_score": 4.5
    },
    "Gaming Console X": {
        "price": 499,
        "features": ["4K/120Hz", "1TB SSD", "Backward Compatibility"],
        "category": "gaming",
        "stock": 7,
        "trend_score": 4.8
    }
}

# System prompt with enhanced instructions
SALES_SYSTEM_PROMPT = f"""
**Role**: Senior Sales Analyst | Date: {datetime.now().strftime('%Y-%m-%d')}

**Core Capabilities**:
1. Real-time Market Analysis (via web search)
2. Inventory Management & Stock Checks
3. Product Comparisons & Alternatives
4. Technical Specifications Breakdown
5. Price Tracking & Competitor Monitoring
6. Trend Identification & Forecasting

**Product Catalog**:
{PRODUCT_CATALOG}

**Operational Guidelines**:
1. Always first check 'stock' field before recommendations
2. Use web search for latest market trends when needed
3. Compare minimum 3 products for any comparison request
4. Highlight 'trend_score' when > 4.5/5.0
5. Mention competitor alternatives with pricing
6. Provide warranty & return policy information
7. Format responses with:
   - Bullet points for features
   - Tables for comparisons
   - Bold headers for sections

**Error Handling**:
- If stock < 5: "Low stock alert: Only X remaining"
- If no data: "Let me research that..."
- For pricing: "Current promotion: [details]"
- Never invent specifications
"""

@st.cache_resource
def get_sales_agent():
    return Agent(
        model=Gemini(
            id="gemini-2.0-flash-exp",
            temperature=0.3,
            max_tokens=1024
        ),
        system_prompt=SALES_SYSTEM_PROMPT,
        tools=[DuckDuckGo()],
        markdown=True
    )

# Retry logic for API calls
@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=10))
def get_ai_response(prompt):
    return get_sales_agent().run(prompt)

# Chat interface
if "messages" not in st.session_state:
    st.session_state.messages = [{
        "role": "assistant",
        "content": "Hi! I'm your sales assistant. Ask about products, compare options, or get market insights! 🚀"
    }]

for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        st.markdown(msg["content"])

if prompt := st.chat_input("Ask about products or trends..."):
    st.session_state.messages.append({"role": "user", "content": prompt})
    
    with st.chat_message("user"):
        st.markdown(prompt)

    response_content = "Sorry, I'm having trouble connecting. Please try again later."  # Default response
    try:
        with st.chat_message("assistant"):
            with st.spinner("Analyzing request..."):
                response = get_ai_response(prompt)
                response_content = response.content
                st.markdown(response_content)
                
                # Auto-suggest follow-ups
                if any(keyword in prompt.lower() for keyword in ["compare", "recommend", "suggest"]):
                    st.markdown("""
                    **Quick Actions**:
                    - 📊 Generate price comparison chart
                    - 📦 Check local availability
                    - ⏳ View price history
                    """)
                
    except Exception as e:
        response_content = f"Error: {str(e)}"
        st.error(response_content)
    
    finally:
        st.session_state.messages.append({
            "role": "assistant",
            "content": response_content
        })