import React from 'react'

const Features = () => {
  return (
    <div>
      <div>
        <h3>Kanban & Task Management</h3>
        <div>
            <p>Visual Workflows</p> <span>Organize tasks effortlessly across To Do, In Progress, and Done stages.</span>
            <p>Quick Task Creation</p> <span>Add tasks instantly with due dates, priority tags, and assignee avatars.</span>
            <p>Sub-task Tracking</p> <span>Keep complex deliverables organized with nested checklists and API documentation logs.</span>
        </div>
      </div>

      <div>
        <h3>Real-Time Project Progress</h3>
        <div>
            <p>Live Percentage Tracking: </p> <span>Monitor project completion rates dynamically from 0% to 100% across multiple streams like Product Launch, Marketing Q3, and Client Onboarding.</span>
            <p>Visual Progress Bars: </p> <span>Instantly spot bottlenecks and track active campaigns at a glance.</span>
        </div>
      </div>

      <div>
        <h3>Upcoming Deadlines & Calendar Sync</h3>
        <div>
            <p>Interactive Date Grid: </p> <span>Never miss a deadline with integrated calendar scheduling right on your main view.</span>
            <p>Color-Coded Milestones: </p> <span>Map product launches and marketing sprints directly onto specific days to keep your workflow predictable.</span>
        </div>
      </div>

      <div>
        <h3>Team Activity & Collaboration</h3>
        <div>
            <p>Live Stream Feed: </p> <span>Track recent actions, design updates, and task changes by team members as they happen.</span>
            <p>Assignee Avatars: </p> <span>Assign team members directly to cards to maintain clear accountability across every task.</span>
        </div>
      </div>
    </div>
  )
}

export default Features
