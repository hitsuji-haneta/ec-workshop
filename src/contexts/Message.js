import React, { useState, createContext } from 'react';

const Context = createContext();
const Provider = ({ children }) => {
  const [message, setMessageText] = useState(
    `クリックしてヒントを探してください`
  );

  const setMessage = name => {
    switch (name) {
      case 'person_1':
        setMessageText(`なにか用かね?`);
        break;
      case 'person_1_a':
        setMessageText(`どの英語を知りたいのかな？`);
        break;
      case 'person_1_b':
        setMessageText(`星は英語でstarと言うんだよ`);
        break;
      case 'person_1_c':
        setMessageText(`お金は英語でmoneyと言うんだよ`);
        break;
      case 'person_1_d':
        setMessageText(`三角は英語でtriangleと言うんだよ`);
        break;
      case 'person_1_e':
        setMessageText(`水は英語でwaterと言うんだよ`);
        break;
      case 'person_1_f':
        setMessageText(`魚は英語でfishと言うんだよ`);
        break;
      case 'bye_1':
        setMessageText(`おお、そうかい。`);
        break;
      case 'bye_1_a':
        setMessageText(`自分から名乗らないとは失礼な！`);
        break;
      case 'person_2':
        setMessageText(`ども`);
        break;
      case 'bye_2':
        setMessageText(`ども`);
        break;
      case 'bye_2get':
        setMessageText(`どぞ`);
        break;
      case 'bye_2rr':
        setMessageText(`え、、何これいらない、、(三角を手に入れた)`);
        break;
      case 'bye_2rb':
        setMessageText(`わーい(魚を手に入れた)`);
        break;
      case 'bye_2ry':
        setMessageText(`わーい。でもなんか汚いな、、(水を手に入れた)`);
        break;
      case 'bye_2bb':
        setMessageText(`え、、何これいらない、、(星を手に入れた)`);
        break;
      case 'bye_2yy':
        setMessageText(`え、いいんですか？あざす！(お金を手に入れた)`);
        break;
      case 'person_3':
        setMessageText(`やぁ`);
        break;
      case 'person_3time':
        const date = new Date();
        setMessageText(`${date.getHours()}時${date.getMinutes()}分だよ。
そんなことより、あのカレンダー、よく見るとちょっと変でしょ？
カメレオンの秘密が隠れているらしいよ。
ヤギに英語を教わるとわかるとか聞いたな、、
`);
        break;
      case 'bye_3':
        setMessageText(`あっそう`);
        break;
      case 'person_4':
        setMessageText(`げんき？`);
        break;
      case 'bye_4':
        setMessageText('そっか。お魚たべたいなー');
        break;
      case 'start':
        setMessageText('脱出ゲームスタート！');
        break;
      case 'calendar':
        setMessageText('カレンダーだ。もう９月か。');
        break;
      case 'calendar_button':
        setMessageText(
          'あれ？よく見ると曜日がボタンになってる！どれか押してみよう。'
        );
        break;
      case 'calendar_s':
        setMessageText('あ、文字が浮かび上がってきた！「青」だって。');
        break;
      case 'calendar_m':
        setMessageText('あ、文字が浮かび上がってきた！「黃」だって。');
        break;
      case 'calendar_t':
        setMessageText('あ、文字が浮かび上がってきた！「赤」だって。');
        break;
      case 'calendar_w':
        setMessageText('あ、文字が浮かび上がってきた！「オレンジ」だって。');
        break;
      case 'calendar_f':
        setMessageText('あ、文字が浮かび上がってきた！「紫」だって。');
        break;
      case 'opening_0':
        setMessageText('ここは動物たちが集まるレストラン…');
        break;
      case 'opening_1':
        setMessageText(
          'ライバル店の店長（サル）「あいつの店、おれの店より繁盛しやがって！くそ〜、客ごと閉じ込めて店の評判を落としてやる！」'
        );
        break;
      case 'opening_2':
        setMessageText(
          'ワニ店長「扉が開かなくなった？そんなワケ無いだろ。はやく仕事に戻りなさい。」'
        );
        break;
      case 'opening_3':
        setMessageText(
          'ニワトリ店員「それが、確認したら本当だったんですよ！コケッ！」'
        );
        break;
      case 'opening_4':
        setMessageText(
          'ワニ店長「なんだって！？い、一体どうしたら…はっ！そこにいるのは人間じゃないか！人間って頭がいいんだろう？どうにかしてこの扉を開いてくれないか！？」'
        );
        break;
      case 'ending_1':
        setMessageText(
          'シロクマ「わーい、お魚だ！くれ！」'
        );
        break;
      case 'ending_2':
        setMessageText(
          'ワニ店長「というかしろくまなんて客、うちの店に今まで来てたか？」'
        );
        break;
      case 'ending_3':
        setMessageText(
          'ニワトリ店員「毛が生えてるこけ…もしやサル（ライバル店店長）の手先…」'
        );
        break;
      case 'ending_4':
        setMessageText(
          'シロクマ「そういうことですわ、まあなんか面倒くさくなってきたしこのへんで鍵返しますわ」'
        );
        break;
      case 'ending_5':
        setMessageText(
          'サル「え、ちょ、無理やり終わらせようとしてね？まあいい、また時間があるときに違う方法で評判落としてやる！覚えてやがれ！」'
        );
        break;
      case 'ending_6':
        setMessageText(
          'おめでとう！ゲームクリア！'
        );
        break;
      case 'map':
        setMessageText(`クリックしてヒントを探してください`);
        break;
      default:
        break;
    }
  };
  return (
    <Context.Provider
      value={{
        message,
        setMessage
      }}>
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Context
};
