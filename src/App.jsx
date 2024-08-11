import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/Feedbackdata"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from "uuid"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
