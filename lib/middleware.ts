import { Middleware } from 'redux';

// 任意のアクションとステートの型を定義します。
// ここでは、ステートとアクションの型を具体的には指定していませんが、
// 実際のアプリケーションでは、適切な型をここに入れる必要があります。
type MyState = any;
type MyAction = any;

// Middleware<DispatchExt = {}, S = any, D = Dispatch>
const loggerMiddleware: Middleware<{}, MyState, Dispatch<MyAction>> = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export default loggerMiddleware;
