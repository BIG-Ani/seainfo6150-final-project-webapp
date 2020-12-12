import React from 'react'
import styles from "../SubscribeForm/SubcribeForm.module.css";

const SubForm = () => {

    return(

        <div>

            <form>
                <fieldset>
                    <legend><h2>Subscribe Form</h2></legend>
                    <div>
                        <label htmlFor="first-name">
                            First name<sup>*</sup>:
                            <input
                                className={styles.name}
                                type="text"
                                id="first-name"
                                name="first-name"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="last-name">
                            Last name<sup>*</sup>:
                            <input
                                className={styles.name}
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email<sup>*</sup>:
                            <input
                                className={styles.email}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ex: myname@example.com"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="telephone">
                            Telephone:
                            <input
                                className={styles.phone}
                                type="tel"
                                id="telephone"
                                name="telephone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="(xxx) xxx xxxx"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="period">
                            Period:
                            <select id="period" className={styles.period}>
                                <option>please select one</option>
                                <option value="One Week">A Week</option>
                                <option value="One Month">A Month</option>
                                <option value="Three Month">Three Months</option>
                                <option value="Six Months">Six Months</option>
                                <option value="One Year">A Year</option>
                            </select>
                        </label>

                    </div>
                    <div className={styles.typeContainer}>
                        <label className={styles.typeLabel}>Type:</label>
                        <input className={styles.typeOption} type="radio" value="Normal" name="Normal" /><label>Normal</label>
                        <input className={styles.typeOption} type="radio" value="Premium" name="Premium" /><label>Premium</label>
                        <input className={styles.typeOption} type="radio" value="Free Trial" name="Free Trial" /><label>Free Trial</label>
                    </div>
                    <div className={styles.formButtonContainer}>
                        <input className={styles.registerButton} type="submit" value="Register" />
                        <button className={styles.cancelButton}>Cancel</button>
                    </div>
                </fieldset>
            </form>
        </div>

    );

}

export default SubForm;