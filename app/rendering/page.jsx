import {submitform} from './actions';

export default function ContactPage() {
    return (
        <div>
           <form action={submitform}>

            <label 
           
            >Name:</label>
           
            <input
            name="name"
          placeholder="Your name"
          className="border p-2 rounded"
          required
            ></input>

            <label>Email</label>

            <input
            name="email"
            placeholder="Your email"
            className="border p-2 rounded"
            required
            ></input>
            <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
           </form>
        </div>
    );
}