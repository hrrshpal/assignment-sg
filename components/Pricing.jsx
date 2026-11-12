import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div>
        <h3>Simple, Transparent Pricing</h3>
        <p>Choose the plan that fits your workflow. Upgrade or downgrade anytime.</p>
      </div>

      <div>

        <div>
            <h4>Starter (Free)</h4>
            <p>For individuals and freelancers building personal momentum.</p>
            <span>Price:</span> <span> ₹0 / month</span>
            <p>Includes:</p>
            <ul>
                <li>Up to 3 active projects</li>
                <li>Unlimited Kanban boards (To Do, In Progress, Done)</li>
                <li>Personal deadline calendar</li>
                <li>Basic task creation & sub-task tracking</li>
                <li>100 MB file attachments</li>          
            </ul>
        </div>
        
        <div>
            <h4>Pro (Most Popular)</h4>
            <p>For growing teams that need real-time metrics and smooth collaboration.</p>
            <span>Price:</span> <span>₹799 / user / month (Billed annually at ₹649/mo)</span>
            <p>Includes:</p>
            <ul>
                <li>Everything in Starter, plus:</li>
                <li>Unlimited projects & workspace boards</li>
                <li>Real-time progress bars & completion metrics (%)</li>
                <li>Live team activity stream & member avatars</li>
                <li>Advanced calendar sync & recurring deadlines</li>    
                <li>10 GB workspace storage</li>
                <li>Priority email support</li>      
            </ul>
        </div>
        
        <div>
            <h4>Enterprise</h4>
            <p>For fast-scaling companies requiring custom workflows, analytics, and dedicated control.</p>
            <span>Price:</span> <span>₹1,999 / user / month (Custom volume discounting available)</span>
            <p>Includes:</p>
            <ul>
                <li>Everything in Pro, plus:</li>
                <li>Unlimited workspace storage</li>
                <li>Custom task statuses & board templates</li>
                <li>Advanced workload & team capacity analytics</li>
                <li>Role-based permissions & SSO (Single Sign-On)</li>
                <li>Dedicated account manager & 24/7 priority support</li>
                <li>99.9% Uptime SLA </li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Pricing
