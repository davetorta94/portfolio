import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export const EngMobileTechonologies = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mobileTechnologyControls = useAnimation();

    useEffect(() => {
     
      if(isInView){
        mobileTechnologyControls.start("nohide");
      } else {
        mobileTechnologyControls.start("hide");
      }
       
      
     }, [isInView])

  return (
    <>

    <div className="container-fluid mobile-tecnologias">
        <div className="row d-flex justify-content-center mt-5 mb-5">
            <div className="col-6 d-flex text-center justify-content-center text-light">
                <h4><TypeAnimation
                      sequence={[
                        "THE TECH I USE",
                        500,
                       
                        
                      ]}
                      speed={20}
                      
                     
                    /></h4>
            </div>
        </div>
        <motion.div className="row d-flex justify-content-center"
        ref={ref}
        variants={{
            hide: { opacity: 0},
            nohide: { opacity: 1}
        }}
          initial="hide"
          animate={mobileTechnologyControls}
          transition={ {ease: "easeIn", duration: 2} }>
            <div className="col-1 mx-5 p-0 text-light text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg><label>HTML5</label>
            </div>
            <div className="col-1 mx-5 p-0 text-light text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277BD" rx="60"/><path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942H53.753ZM128.095 38H48l2.904 31.942h77.191V38Zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164l.147-.041Z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942h39.333Z"/></g></svg><label>CSS</label>
            </div>
            <div className="col-1 mx-5 p-0 text-light text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 256 256"><path fill="#F7DF1E" d="M0 0h256v256H0V0Z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg><label>JavaScript</label>
            </div>
           
            </motion.div>

            <motion.div className="row d-flex justify-content-center"
        ref={ref}
        variants={{
            hide: { opacity: 0},
            nohide: { opacity: 1}
        }}
          initial="hide"
          animate={mobileTechnologyControls}
          transition={ {ease: "easeIn", duration: 2} }>
            
            <div className="col-1 mx-5 p-0 text-light text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"/></svg><label>React js</label>
            </div>
            <div className="col-1 mx-5 p-0 text-light text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 314"><defs><linearGradient id="IconifyId18c02dac42b74890c0" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><linearGradient id="IconifyId18c02dac42b74890c1" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"/><stop offset="40.32%" stop-color="#54A044"/><stop offset="71.36%" stop-color="#66B848"/><stop offset="90.81%" stop-color="#6CC04A"/></linearGradient><linearGradient id="IconifyId18c02dac42b74890c2" x1="-4413.77%" x2="5327.93%" y1="13.43%" y2="13.43%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="IconifyId18c02dac42b74890c3" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="IconifyId18c02dac42b74890c4" x1="-9713.77%" x2="27.93%" y1="36.21%" y2="36.21%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="IconifyId18c02dac42b74890c5" x1="-103.861%" x2="100.797%" y1="50.275%" y2="50.275%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="IconifyId18c02dac42b74890c6" x1="130.613%" x2="4.393%" y1="-211.069%" y2="201.605%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><path id="IconifyId18c02dac42b74890c7" d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85Z"/></defs><g fill="none"><path fill="#539E43" d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04Zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18c0 .348-.116.694-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95Z"/><path fill="#333" d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81c1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543l-.116-75.817ZM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849c-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347Zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417Zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543c0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.821 2.821 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0l29.125-16.99Z"/><path fill="#539E43" d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04l9.361-5.433Z"/><g transform="translate(134.068 70.501)"><mask id="IconifyId18c02dac42b74890c8" fill="#fff"><use href="#IconifyId18c02dac42b74890c7"/></mask><use fill="url(#IconifyId18c02dac42b74890c0)" href="#IconifyId18c02dac42b74890c7"/><g mask="url(#IconifyId18c02dac42b74890c8)"><path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693Zm4.739 123.203c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079Z"/><path fill="url(#IconifyId18c02dac42b74890c1)" d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156Z"/></g><g mask="url(#IconifyId18c02dac42b74890c8)"><path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271ZM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116Z"/><path fill="url(#IconifyId18c02dac42b74890c2)" fill-rule="evenodd" d="m50.391.809l-.693.347h.924l-.231-.347Z" transform="translate(0 -9.246)"/><path fill="url(#IconifyId18c02dac42b74890c3)" fill-rule="evenodd" d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2Z" transform="translate(0 -9.246)"/><path fill="url(#IconifyId18c02dac42b74890c4)" fill-rule="evenodd" d="m111.3 104.712l-.347-.578v.809l.346-.231Z" transform="translate(0 -9.246)"/><path fill="url(#IconifyId18c02dac42b74890c5)" fill-rule="evenodd" d="m106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814Z" transform="translate(0 -9.246)"/><path fill="url(#IconifyId18c02dac42b74890c6)" fill-rule="evenodd" d="m106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814Z" transform="translate(0 -9.246)"/></g></g></g></svg><label>Node js</label>
            </div>
            </motion.div>

            <motion.div className="row barra">

            </motion.div>
           
    </div>

    </>
  )
}
