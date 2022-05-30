export * from './Button';//Means take everything from Button file and export it from This Index.js file NOTE:- if we do not mention complete file path while importing something then it by defaults look into the index file of that directory.
//To use this SYntax we can't export default Button in Button.js file but use syntax export {Button: Button}; since key value is same simply {Button}
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './LoginForm';
export * from './Input';
export * from './Spinner';