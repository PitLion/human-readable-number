module.exports = function toReadable (number) {
  
  let result;
  let currentNumber = String(number);

    if (currentNumber.length === 3) {
        switch (currentNumber[0]) {
            case '9':
              result = 'nine hundred';
              break;
            case '8':
              result = 'eight hundred';
              break;
            case '7':
              result = 'seven hundred';
              break;
            case '6':
              result = 'six hundred';
              break;
            case '5':
              result = 'five hundred';
              break;
            case '4':
              result = 'four hundred';
              break;
            case '3':
              result = 'three hundred';
              break;
            case '2':
              result = 'two hundred';
              break;
            case '1':
              result = 'one hundred';
              break;
          }

          switch (currentNumber[1]) {
            case '9':
              result = `${result} ninety`;
              break;
            case '8':
              result = `${result} eighty`;
              break;
            case '7':
              result = `${result} seventy`;
              break;
            case '6':
              result = `${result} sixty`;
              break;
            case '5':
              result = `${result} fifty`;
              break;
            case '4':
              result = `${result} forty`;
              break;
            case '3':
              result = `${result} thirty`;
              break;
            case '2':
              result = `${result} twenty`;
              break;
          }

         if ((currentNumber[1] === '1') && (currentNumber[2] === '9')) {
            result = `${result} nineteen`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '8')) {
            result = `${result} eighteen`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '7')) {
            result = `${result} seventeen`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '6')) {
            result = `${result} sixteen`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '5')) {
            result = `${result} fifteen`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '4')) {
            result = `${result} fourteen`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '3')) {
            result = `${result} thirteen`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '2')) {
            result = `${result} twelve`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '1')) {
            result = `${result} eleven`;
          } else if ((currentNumber[1] === '1') && (currentNumber[2] === '0')) {
            result = `${result} ten`;
          }

      if (currentNumber[1] !== '1') {
            switch (currentNumber[2]) {
                case '9':
                  result = `${result} nine`;
                  break;
                case '8':
                  result = `${result} eight`;
                  break;
                case '7':
                  result = `${result} seven`;
                  break;
                case '6':
                  result = `${result} six`;
                  break;
                case '5':
                  result = `${result} five`;
                  break;
                case '4':
                  result = `${result} four`;
                  break;
                case '3':
                  result = `${result} three`;
                  break;
                case '2':
                  result = `${result} two`;
                  break;
                case '1':
                  result = `${result} one`;
                  break;
              }
          }
  return result;
    }

    if (currentNumber.length === 2) {
          switch (currentNumber[0]) {
            case '9':
              result = 'ninety';
              break;
            case '8':
              result = 'eighty';
              break;
            case '7':
              result = 'seventy';
              break;
            case '6':
              result = 'sixty';
              break;
            case '5':
              result = 'fifty';
              break;
            case '4':
              result = 'forty';
              break;
            case '3':
              result = 'thirty';
              break;
            case '2':
              result = 'twenty';
              break;
          }

          if ((currentNumber[0] === '1') && (currentNumber[1] === '9')) {
            result = 'nineteen';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '8')) {
            result = 'eighteen';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '7')) {
            result = 'seventeen';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '6')) {
            result = 'sixteen';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '5')) {
            result = 'fifteen';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '4')) {
            result = 'fourteen';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '3')) {
            result = 'thirteen';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '2')) {
            result = 'twelve';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '1')) {
            result = 'eleven';
          } else if ((currentNumber[0] === '1') && (currentNumber[1] === '0')) {
            result = 'ten';
          }

          if (currentNumber[0] !== '1') {
            switch (currentNumber[1]) {
                case '9':
                  result = `${result} nine`;
                  break;
                case '8':
                  result = `${result} eight`;
                  break;
                case '7':
                  result = `${result} seven`;
                  break;
                case '6':
                  result = `${result} six`;
                  break;
                case '5':
                  result = `${result} five`;
                  break;
                case '4':
                  result = `${result} four`;
                  break;
                case '3':
                  result = `${result} three`;
                  break;
                case '2':
                  result = `${result} two`;
                  break;
                case '1':
                  result = `${result} one`;
                  break;
              }
          }
      return result;
    }


    if (currentNumber.length === 1) {
        switch (currentNumber) {
          case '9':
            result = 'nine';
            break;
          case '8':
            result = 'eight';
            break;
          case '7':
            result = 'seven';
            break;
          case '6':
            result = 'six';
            break;
          case '5':
            result = 'five';
            break;
          case '4':
            result = 'four';
            break;
          case '3':
            result = 'three';
            break;
          case '2':
            result = 'two';
            break;
          case '1':
            result = 'one';
            break;
          case '0':
            result = 'zero';
            break;
        }
      return result;
  }
}
