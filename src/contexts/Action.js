import React, { useState, createContext } from 'react';

const Context = createContext();
const Provider = ({ children }) => {
  const [action, setActionButtons] = useState([]);
  const setAction = (name, progress = 0) => {
    switch (name) {
      case 'person_1':
        setActionButtons([
          {
            text: '英語を教えてください',
            nextMessage: 'person_1_a',
            nextAction: 'person_1_2'
          },
          { text: '誰ですか？', nextMessage: 'bye_1_a', nextAction: 'bye' },
          {
            text: 'なんでもないです',
            nextMessage: 'bye_1',
            nextAction: 'bye'
          }
        ]);
        break;
      case 'person_1_2':
        setActionButtons([
          {
            text: '英語で星',
            nextMessage: 'person_1_b',
            nextAction: 'person_1_2'
          },
          {
            text: '英語でお金',
            nextMessage: 'person_1_c',
            nextAction: 'person_1_2'
          },
          {
            text: '英語で三角',
            nextMessage: 'person_1_d',
            nextAction: 'person_1_2'
          },
          {
            text: '英語で水',
            nextMessage: 'person_1_e',
            nextAction: 'person_1_2'
          },
          {
            text: '英語で魚',
            nextMessage: 'person_1_f',
            nextAction: 'person_1_2'
          },
          { text: '十分です', nextMessage: 'bye_1', nextAction: 'bye' }
        ]);
        break;
      case 'person_2':
        setActionButtons([
          {
            text: '赤',
            nextMessage: 'bye_2',
            nextAction: 'red',
            nextPerson: 'person_2rr'
          },
          {
            text: '青',
            nextMessage: 'bye_2',
            nextAction: 'blue',
            nextPerson: 'person_2bb'
          },
          {
            text: '黄',
            nextMessage: 'bye_2',
            nextAction: 'yellow',
            nextPerson: 'person_2yy'
          },
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'red':
        setActionButtons([
          {
            text: '赤',
            nextMessage: progress >= 3 ? 'bye_2get' : 'bye_2',
            nextAction: progress >= 3 ? 'byerr' : 'bye',
            nextPerson: progress >= 3 ? 'person_2rr2' : 'person_2rr'
          },
          {
            text: '青',
            nextMessage: progress >= 3 ? 'bye_2get' : 'bye_2',
            nextAction: progress >= 3 ? 'byerb' : 'bye',
            nextPerson: progress >= 3 ? 'person_2rb2' : 'person_2rb'
          },
          {
            text: '黄',
            nextMessage: progress >= 3 ? 'bye_2get' : 'bye_2',
            nextAction: progress >= 3 ? 'byery' : 'bye',
            nextPerson: progress >= 3 ? 'person_2ry2' : 'person_2ry'
          },
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'blue':
        setActionButtons([
          {
            text: '赤',
            nextMessage: progress >= 3 ? 'bye_2get' : 'bye_2',
            nextAction: progress >= 3 ? 'byerb' : 'bye',
            nextPerson: progress >= 3 ? 'person_2rb2' : 'person_2rb'
          },
          {
            text: '青',
            nextMessage: progress >= 3 ? 'bye_2get' : 'bye_2',
            nextAction: progress >= 3 ? 'byebb' : 'bye',
            nextPerson: progress >= 3 ? 'person_2bb2' : 'person_2bb'
          },
          {
            text: '黄',
            nextMessage: 'bye_2',
            nextAction: 'bye',
            nextPerson: 'person_2by'
          },
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'yellow':
        setActionButtons([
          {
            text: '赤',
            nextMessage: progress >= 3 ? 'bye_2get' : 'bye_2',
            nextAction: progress >= 3 ? 'byery' : 'bye',
            nextPerson: progress >= 3 ? 'person_2ry2' : 'person_2ry'
          },
          {
            text: '青',
            nextMessage: 'bye_2',
            nextAction: 'bye',
            nextPerson: 'person_2by'
          },
          {
            text: '黄',
            nextMessage: progress >= 3 ? 'bye_2get' : 'bye_2',
            nextAction: progress >= 3 ? 'byeyy' : 'bye',
            nextPerson: progress >= 3 ? 'person_2yy2' : 'person_2yy'
          },
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'byerr':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'bye_2rr',
            nextAction: 'bye',
            nextPerson: 'person_2rr'
          }
        ]);
        break;
      case 'byerb':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'bye_2rb',
            nextAction: 'byerb2',
            nextPerson: 'person_2rb'
          }
        ]);
        break;
      case 'byerb2':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map',
            nextProgress: 4
          }
        ]);
        break;
      case 'byery':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'bye_2ry',
            nextAction: 'bye',
            nextPerson: 'person_2ry'
          }
        ]);
        break;
      case 'byebb':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'bye_2bb',
            nextAction: 'bye',
            nextPerson: 'person_2bb'
          }
        ]);
        break;
      case 'byeyy':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'bye_2yy',
            nextAction: 'bye',
            nextPerson: 'person_2yy'
          }
        ]);
        break;

      case 'person_3':
        setActionButtons([
          {
            text: 'いま何時ですか',
            nextMessage: 'person_3time',
            nextAction: 'bye'
          },
          { text: 'なんでもないです', nextMessage: 'bye_3', nextAction: 'bye' },
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'person_4':
        setActionButtons([
          {
            text: 'はい',
            nextMessage: 'bye_3',
            nextAction: 'bye'
          },
          {
            text: 'いいえ',
            nextMessage: 'bye_3',
            nextAction: 'bye'
          },
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'bye':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'calendar':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map'
          }
        ]);
        break;
      case 'calendar_button':
        setActionButtons([
          {
            text: '日',
            nextMessage: 'calendar_s',
            nextAction: 'calendar_s'
          },
          {
            text: '月',
            nextMessage: 'calendar_m',
            nextAction: 'calendar_m'
          },
          {
            text: '火',
            nextMessage: 'calendar_t',
            nextAction: 'calendar_t'
          },
          {
            text: '水',
            nextMessage: 'calendar_w',
            nextAction: 'calendar_w'
          },
          {
            text: '木',
            nextMessage: 'calendar_t',
            nextAction: 'calendar_t'
          },
          {
            text: '金',
            nextMessage: 'calendar_f',
            nextAction: 'calendar_f'
          },
          {
            text: '土',
            nextMessage: 'calendar_s',
            nextAction: 'calendar_s'
          },
        ]);
        break;
      case 'calendar_s':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map',
            nextProgress: 5
          }
        ]);
        break;
      case 'calendar_m':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map',
            nextProgress: 5
          }
        ]);
        break;
      case 'calendar_t':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map',
            nextProgress: 5
          }
        ]);
        break;
      case 'calendar_w':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map',
            nextProgress: 5
          }
        ]);
        break;
      case 'calendar_f':
        setActionButtons([
          {
            text: '戻る',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map',
            nextProgress: 5
          }
        ]);
        break;
      case 'opening_0':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'opening_1',
            nextAction: 'opening_1',
            nextPerson: 'saru'
          }
        ]);
        break;
      case 'opening_1':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'opening_2',
            nextAction: 'opening_2',
            nextPerson: 'wani'
          }
        ]);
        break;
      case 'opening_2':
        setActionButtons([
          {
            text: '次へ',
            nextMessage: 'opening_3',
            nextAction: 'opening_3',
            nextPerson: 'niwatori'
          }
        ]);
        break;
      case 'opening_3':
        setActionButtons([
          {
            text: 'ゲームスタート！',
            nextMessage: 'map',
            nextAction: 'map',
            nextViewer: 'map',
            nextProgress: 2
          }
        ]);
        break;
      case 'map':
      default:
        setActionButtons([]);
        break;
    }
  };

  return (
    <Context.Provider
      value={{
        action,
        setAction
      }}>
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Context
};
