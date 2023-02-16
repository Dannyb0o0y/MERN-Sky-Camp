import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { BsTelephone } from 'react-icons/bs';


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
     // Disable form while processing submission
     setDisabled(true);

     // Define template params
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
        // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
        // Reset contact form fields after submission
      reset();
        // Display success toast
      toastifySuccess();
       // Re-enable form submission
       setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} className="col-12 m-3" noValidate >
                {/* Row 1 of form */}
                <div className='row formRow'>

            {/* About us section */}
                  <br></br>
                  <br></br>
               
                
                  <br></br>
                  <h1>About Us</h1>
                  <br></br>
                  <p>We're a small company so we can offer a very personal service. You will meet our team, Daniel (the managing director), Victor (Senior Sky Sales Specialist and Instructor), Jared (Finance and Administration) there to welcome the enthusiastic campers at the camp.</p>
                  <br></br>
                   {/* Contact */}
                   <h1>Contact Us</h1>
                   <br></br>

                   <p>We also offer horse riding lessons, delicious take-away meals, heated pool,  and transportation at the resort. We also team up with other resort owners and food caterers to secure you the most affordable and best deals for you, your family and friends.</p>

                   <p></p>
                  {/* Enquiry  */}
                  <p>Contact us at 1800 155 155 <BsTelephone style={{ color: 'blue', fontSize: '30px' }} />for more information please contact our staff and our friendly staff would be more than happy assist you.</p>
                  <br></br>
                  
                  <p>If you 'd like to make an enquiry or get in touch about a ski package that you have already purchased or like to make a cancellation due to unforeseen circumstances and within fourteen days period, we will refund to you your money.</p>


                  <p>You can get in touch with our team by submitting the form. For any other queries enter everything we need to know below and we'll make sure the right team gets back to you using the contact details provided.</p>
                  <br></br>
                  <br></br>

                  <p style = {{color: 'grey',fontSize:'15px', textDecorationStyle: 'bolder'}}>Due to exceptional demand, we are currently experiencing extremely high call volumes. We apologise for the inconvenience and working as quickly as possible to repond to everyone as fast as possible.</p>

                  <br></br>
                  <div className='col-5'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: 
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col-10'>
                  <br></br>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                            value: true,
                            message: 'Please enter a subject'
                          },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col-10'>
                  <br></br>

                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <br></br>
                <button className='submit-btn' disabled={disabled} type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainerstyle style={{ color: 'green'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;