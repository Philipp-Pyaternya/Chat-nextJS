import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import FormError from './error';

const SignInForm = () => (
    <div className="w-auto">
        <div>
            <h1 className="text-5xl font-bold text-center text-emerald-500 ">
                Sign In
            </h1>
        </div>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email,
                    )
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className="flex flex-col mt-10">
                    <div className="flex flex-col  bg-slate-100 rounded-xl relative">
                        <div
                            className={`flex justify-center items-center rounded-xl ${
                                errors.email && touched.email
                                    ? 'border-2 border-red-500 '
                                    : ''
                            }`}
                        >
                            <FontAwesomeIcon
                                className="w-8 h-8 text-slate-300 bg-slate-100 cursor-pointer px-3"
                                icon={faEnvelope}
                            />
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Email"
                                className="w-96 p-5 focus:outline-none rounded-xl bg-slate-100"
                            />
                        </div>
                        {errors.email && touched.email && errors.email && (
                            <FormError message="Please enter a correct email." />
                        )}
                    </div>

                    <div className="flex flex-col  bg-slate-100 rounded-l-lg relative mt-10">
                        <div
                            className={`flex justify-center items-center rounded-xl ${
                                errors.password && errors.password
                                    ? 'border-2 border-red-500 '
                                    : ''
                            }`}
                        >
                            <FontAwesomeIcon
                                className="w-8 h-8 text-slate-300 bg-slate-100 cursor-pointer px-3"
                                icon={faLock}
                            />
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Password"
                                className="w-96 p-5 focus:outline-none rounded-r-lg bg-slate-100"
                            />
                        </div>
                        {errors.password &&
                            touched.password &&
                            errors.password && (
                                <FormError message="Please enter a valid password." />
                            )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="p-5 rounded-full drop-shadow-lg text-white font-bold bg-emerald-500 hover:bg-emerald-400 mt-10"
                    >
                        Submit
                    </button>
                    <div className="mt-4">
                        <p className="text-center text-gray-600">
                            Forgot your password ?{' '}
                            <Link
                                className="text-emerald-500 hover:underline text"
                                href="/restore"
                            >
                                click here
                            </Link>
                            .
                        </p>
                    </div>
                </form>
            )}
        </Formik>
    </div>
);

export default SignInForm;
