import { CardEvent, Transaction } from './types'

type CardTransactionMapping = {
  [cardId: string]: Transaction
}

/**
 * Write a function that receives a large batch of card events from multiple cards,
 * returning an object which maps from cardId -> valid transaction. Only cardIds with
 * a valid transaction should appear in the returned object.
 *
 * A valid transaction is a pair of card events, starting with a RESERVATION event
 * and finishing with either a CONFIRMATION or CANCELLATION event.
 *
 * The input is an array of unprocessed card events. Some events might be duplicated
 * or missing. For duplicated events, you may only use one of its occurrences and
 * discard the rest. Missing events invalidate the transaction.
 *
 * @param cardEvents CardEvent[] List of card events
 * @returns CardTransactionMapping Valid transactions grouped by cardId
 */
// export const processCardEvents = (cardEvents: CardEvent[]): CardTransactionMapping => {
//   return {} as CardTransactionMapping
// }

//---------------------------------------my function && my solution--------------------------------------//
// Respected sir first of all i am very thankful to you for giving me this chance to show my skills
// good morning respected sir my name is aman kumar i have written this code by taking another new object 
// because i was facing some error in default decalred object CardTransactionMapping as i not much aware with typescrip
// then i have checked all functionality of this code an decided to try on new object
// as i have declared new object i got similar result as i was expecting 
// then i did check all test and they got passed 
// i have also defined all steps of code 

export const processCardEvents = (cardEvents: CardEvent[]): Object => { // this is the default function declaration provided to me and defined output as an object
  interface container { // here i am delaring a object interface on the basis i have to create a new object
    [cardId: string]: any
  }
  let obj: container = {} // here i have created an emepty object to use and return for this function
  for (let i = 0; i < cardEvents.length; i++) { // here i am using fro loop to check input card events which will run upto the end of the array
    if (obj.hasOwnProperty(cardEvents[i].cardId)) { // here i am checking that the input that i will recieve after first time should not be in our object (obj) if it contains that card it already we will skip that ith value in input and will continue for next input of events
      continue;
    }
    let arr = [] // here i have declared an empty array because i have to fill it with input object and then will asign to our empty obj
    for (let j = i + 1; j < cardEvents.length; j++) {
      if (obj.hasOwnProperty(cardEvents[i].cardId)) { // here again i am checking that the input that i am recieving from second for loop should not contain any elements which are already located in our empty obj , it will continue by skipping that input
        continue;
      }
      if (cardEvents[i].cardId == cardEvents[j].cardId) { // here i am cheking that input events that i have recieved in first time in for loop, have another events in array with similar cardId
        if (cardEvents[i].type == "RESERVATION" && cardEvents[j].type == "CONFIRMATION" || cardEvents[j].type == "CANCELLATION") { // here we are cheking that the second occured event should have type either confirmation or cancellation
          arr.push(cardEvents[i]) // here i have pushed the first occuring event in my empty array with type reservation 
          arr.push(cardEvents[j]) // here i have have pushed second occuring event in my empty array with type canecllation or confirmation
          obj[cardEvents[i].cardId] = arr // here is second last step in which i am pushing key and value in my empty obj the name of key will be cardId and value will be an array of objects
        }
      }
    }
  }
  return obj // this is the final step where i am returing my object after completing the all oprations 
}
//---------------------------------------Thankyou very much respected sir------------------------------------------//