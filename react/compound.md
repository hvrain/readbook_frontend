# 컴파운드 컴포넌트

## 컴파운드 컴포넌트란?

- 한국어로 복한 컴포넌트라고 한다.
- 하나의 파일에 여러 컴포넌트를 만들어 복수의 컴포넌트를 export하는 방법

### 예제

![compound](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-cbYp7ynCa0jhyn1wJRocg.png)

```js

import React from 'react'
import { twMerge } from 'tailwind-merge';

//tailwind classes for each component
const cardClasses = 'bg-white min-w-[320px]  rounded-lg flex flex-col items-center justify-center p-5';
const headerClasses = 'flex justify-between w-full mb-2';
const nameClasses = 'text-2xl font-bold text-center text-gray-800';
const roleClasses = 'text-md font-medium text-center text-gray-800';
const socialsClasses = 'flex items-center justify-center gap-4 my-4';
const socialButtonClasses = 'text-xl text-gray-400';
const actionsClasses = 'flex items-center justify-center w-full gap-2 mt-2'

//Individual components
const actionButtonClasses = (type) => twMerge('border-2 px-2 py-1.5 rounded text-sm font-bold w-full', type === 'primary' ? 'bg-sky-700 text-white' : 'text-gray-400 bg-white');
const Card = ({ children }) => <div className={cardClasses}> {children} </div>
const Header = ({ children }) => <div className={headerClasses}> {children} </div>
const Image = ({ src, alt }) => <img src={src} alt={alt} width={150} height={150} className='rounded-full' />
const Name = ({ children }) => <h1 className={nameClasses}>{children}</h1>
const Role = ({ children }) => <h3 className={roleClasses}>{children}</h3>
const Socials = ({ children }) => <div className={socialsClasses}> {children} </div>
const SocialButton = ({ children }) => <button className={socialButtonClasses}> {children} </button>
const Actions = ({ children }) => <div className={actionsClasses}> {children} </div>
const HeaderButton = ({ children, onClick }) =>
    <button className='text-gray-400' onClick={onClick}>
        {children}
    </button>
const ActionButton = ({ children, type, onClick }) =>
    <button className={actionButtonClasses(type)} onClick={onClick}>
        {children}
    </button>
export {
    Card, Header, ActionButton, Actions, HeaderButton, Image, Name, Role, SocialButton, Socials,
}

```

### 장점

1. 하나의 컴포넌트를 여러 컴포넌트로 분리해서 재사용성과 유연함을 높인다.

### Ref

[Compound Components Pattern in React](https://javascript.plainenglish.io/compound-components-pattern-in-react-4c176c18f9ba)
[Compound Components youtube](https://www.youtube.com/watch?v=PPOKvugfi98)
