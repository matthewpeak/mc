import * as React from 'react'
import {features,featuresText,featuresSection,top,bottom,icon,iconHolder,whatSection} from './whatWeDo.module.css'
// import {ReactComponent as Scale } from '../images/svg/scale.svg'
import { useSpring, animated } from 'react-spring'
const WhatWeDo =()=>{
    const props = useSpring({
		to: { opacity: 1,transform:'translateY(0em)' },
		from: { opacity: 0,transform:'translateY(1em)' },
	  })
    return(
    <section className={whatSection}>
    <animated.div style={props}>
    <div >
        <h2>TYPES OF CASES WE HANDLE</h2>
        <p className={featuresText}>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
        <div className={features}>
            <div className={top}>
            <section className={featuresSection}>
                <span className={icon}>
                <span className={iconHolder}>
                <svg aria-hidden="true" height='2.1em' paddingRight="1em" width='2.1em' focusable="false" data-prefix="fas" data-icon="user-injured" class="svg-inline--fa fa-user-injured fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M277.37 11.98C261.08 4.47 243.11 0 224 0c-53.69 0-99.5 33.13-118.51 80h81.19l90.69-68.02zM342.51 80c-7.9-19.47-20.67-36.2-36.49-49.52L239.99 80h102.52zM224 256c70.69 0 128-57.31 128-128 0-5.48-.95-10.7-1.61-16H97.61c-.67 5.3-1.61 10.52-1.61 16 0 70.69 57.31 128 128 128zM80 299.7V512h128.26l-98.45-221.52A132.835 132.835 0 0 0 80 299.7zM0 464c0 26.51 21.49 48 48 48V320.24C18.88 344.89 0 381.26 0 422.4V464zm256-48h-55.38l42.67 96H256c26.47 0 48-21.53 48-48s-21.53-48-48-48zm57.6-128h-16.71c-22.24 10.18-46.88 16-72.89 16s-50.65-5.82-72.89-16h-7.37l42.67 96H256c44.11 0 80 35.89 80 80 0 18.08-6.26 34.59-16.41 48H400c26.51 0 48-21.49 48-48v-41.6c0-74.23-60.17-134.4-134.4-134.4z"></path></svg>           
                </span>
                <h3>Personal Injury</h3>
                </span>
                <p className={featuresText}>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
            </section>
            <section className={featuresSection}>
                <span className={icon}>
                <span className={iconHolder}>
                <svg aria-hidden="true" height='2.1em' width='2.1em' focusable="false" data-prefix="fas" data-icon="balance-scale" class="svg-inline--fa fa-balance-scale fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                </span>
                <h3>Criminal Defense</h3>
                </span>
                <p className={featuresText}>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
            </section>
            </div>
            <div className={bottom}>
            <section className={featuresSection}>
                <span className={icon}>
                <span className={iconHolder}>
                    <svg aria-hidden="true" height='2.1em' width='2.1em' focusable="false" data-prefix="fas" data-icon="id-card" class="svg-inline--fa fa-id-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"></path></svg>
                    </span>
                <h3>Professional License Defense</h3>
                </span>
                <p className={featuresText}>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
            </section>
            <section className={featuresSection}>
            <span className={icon}>
                <span className={iconHolder}>
                <svg aria-hidden="true" height='2.1em' width='2.1em' focusable="false" data-prefix="fas" data-icon="shield-alt" class="svg-inline--fa fa-shield-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg>
                </span>
                <h3>Law Enforcement Liability</h3>
                </span>
                <p className={featuresText}>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
            </section>
            </div>
        </div>
        <button>learn more</button>
        </div>
        </animated.div>
    </section>
    )
}

export default WhatWeDo