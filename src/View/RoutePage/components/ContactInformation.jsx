import { IMaskInput } from 'react-imask';
import { useRef } from 'react';

import Telephone from '../../../assets/img/Logo/telephone.svg'
import Telegram from '../../../assets/img/Logo/telegram.svg'
import Mail from '../../../assets/img/Logo/mail.svg'
import User from '../../../assets/img/Logo/user.svg'


function ContactInformation() {
    const ref = useRef(null);
    const inputRef = useRef(null);
    return ( 
        <div className='py-8 container mx-auto px-2'>
            <h1 className=' text-center text-3xl mb-12'>Контактная информация</h1>
            <div className=' grid grid-cols-4 gap-10 '>
            <div className='relative rounded-3xl flex h-16 '>
                <img className=' absolute h-12 top-2 left-4' src={Telegram} alt="" />
                <IMaskInput
                className='  border-2 border-black mx-auto pl-20 text-2xl w-full rounded-l-full rounded-r-full bg-sky-200'
                  mask={'{@}************'}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}

                  onAccept={

                    (value, mask) => console.log(value)
                  }
                  placeholder='@Ваш Телеграм'
                />
              
              </div>
              <div className='relative rounded-3xl flex'>
                <img className='absolute h-12 top-2 left-4' src={Telephone} alt="" />
                <IMaskInput
                className='border-2 border-black pl-20  mx-auto text-2xl w-full rounded-l-full rounded-r-full bg-green-200'
                  mask={'+{7}(000)000-00-00'}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}

                  onAccept={

                    (value, mask) => console.log(value)
                  }
                  placeholder='Номер телефона '
                />
              </div>
              <div className='relative rounded-3xl flex '>
              <img className='absolute h-12 top-2 left-4' src={Mail} alt="" />
                <IMaskInput
                className='border-2 border-black pl-20 mx-auto text-2xl w-full rounded-l-full rounded-r-full bg-orange-200'
                  mask={'************************'}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}

                  onAccept={

                    (value, mask) => console.log(value)
                  }
                  placeholder='Почта'
                />
              </div>
              <div className='relative rounded-3xl flex'>
              <img className='absolute h-12 top-2 left-4' src={User} alt="" />
                <IMaskInput
                className='border-2 border-black pl-20 mx-auto text-2xl w-full rounded-l-full rounded-r-full bg-rose-200'
                  mask={'************************'}
                  radix="."
                  value=""
                  unmask={true}
                  ref={ref}
                  inputRef={inputRef}

                  onAccept={

                    (value, mask) => console.log(value)
                  }
                  placeholder='Имя'
                />
              </div>
            </div>
            </div>
     );
}

export default ContactInformation;