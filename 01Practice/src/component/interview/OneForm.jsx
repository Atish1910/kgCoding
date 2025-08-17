
// Create a form with name, email, and password fields.
// Validate email format, password length before submit.
import { useForm } from "react-hook-form"

const OneForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState : {errors, isSubmitting}
    } = useForm({
        defaultValues : {name : "", email : "", password : ""},
        mode : "onTouched"
    });

    const onLogin = (data) => {
        console.log(data);
        reset();
    }
    return (
        <>
         <div className="row text-center justify-content-center py-2">
          <div className="col-lg-6 border py-4">
            <form action="" onSubmit={handleSubmit(onLogin)}>
              <input type="text" placeholder="name" className={`form-control mb-3 ${errors.name ? "border-2 border-danger " : ""}`} 
               {
                  ...register("name", {
                    required : "Enter Your Name",
                    minLength : {value : 3, message : "min Char should be 3Digits"}
                  })
               }
               />
               {
                errors.name && 
                <label htmlFor="" className="text-danger">{errors.name.message}</label>
               }
              
              <input type="text" placeholder="email" className={`form-control mb-3 ${errors.email ? "border-2 border-danger " : ""}`}
              
              {
                  ...register("email", {
                    required : "Enter Your Email",
                  })
               }

              />
               {
                errors.email && 
                <label htmlFor="" className="text-danger">{errors.email.message}</label>
               }
              
              <input type="text" placeholder="password" className={`form-control mb-3 ${errors.password ? "border-2 border-danger " : ""}`}
              {
                  ...register("password", {
                    required : "Enter Your password",
                    minLength : {value : 4, message : "min password should be 4Digits"}
                  })
               }
              />
               {
                errors.password && 
                <label htmlFor="" className="text-danger">{errors.password.message}</label>
               }
               <br />

              <button className="btn btn-success" disabled={isSubmitting}>{isSubmitting ? "submitting.." : "Create Account"}</button>
            </form>
          </div>
        </div>   
        </>
    );
};

export default OneForm;