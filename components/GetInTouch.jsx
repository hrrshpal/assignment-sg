import React from 'react'

const GetInTouch = () => {
  return (
    <div>
      <div>
        <h3>Get in Touch</h3>
        <p>We'd love to hear from you. Whether you have a question about features, pricing, enterprise deployment, or need a hand setting up your workspace, our team is ready to help.</p>
      </div>

      <div>
        <form action="#">
            <input type="text" placeholder='Enter Your Full Name' /> <br />  <br />
            <input type="email" placeholder='Enter Your Work Email' name="email" id="email" /> <br /> <br />
            <label htmlFor="companysize"> Company Size
                <select name="size" id="size">
                    <option value="1-10" defaultChecked>1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                </select>
            </label> <br /> <br />
            <textarea name="msg" id="msg" placeholder='Tell us how we can help your team maximize output...' cols={80} rows={10}></textarea>
            <button>Send message</button>
        </form>
      </div>

      <div>
        <h3>Other Ways to Reach Us</h3>
        <span>Support & Help Desk: </span> <span>support@workmaxxxing.com</span>
        <span>Sales & Enterprise: </span> <span>sales@workmaxxxing.com</span>
        <span>Office Location: </span> <span>Workmaxxxing Technologies Inc., Cyber City, DLF Phase 2, Gurugram, Haryana 122002, India</span>        
      </div>
    </div>
  )
}

export default GetInTouch
