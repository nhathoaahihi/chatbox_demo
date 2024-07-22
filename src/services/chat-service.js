/* eslint-disable no-unused-vars */
import { CHAT_CONSTANTS } from "../config/apiUrls";
import axios from "../config/axios";

export async function getPromptResponse({ query, onSuccess, onError }) {
  let user_session = '';
  if (!localStorage.getItem('user_session')) {
    user_session = crypto.randomUUID();
    localStorage.setItem('user_session', user_session);
  } else {
    user_session = localStorage.getItem('user_session');
  }
  try {
    const response = await fetch('http://localhost:5000/submit_question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          manager_id: "Cloudgo12-341-214124-342",
          model_id: "8680b60c-5c63-4cef-b98d-11b1e5f50217",
          user_input: query,
          user_session: user_session,
        },
      )
    });
    const result = await response.json();
    console.log('-------', result)
    onSuccess(result['Message']);
  } catch (error) {
    onError(error);
  }
}
