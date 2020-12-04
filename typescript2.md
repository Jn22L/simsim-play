# typescript 공부후 생각나는것 이것저것 정리

## module 사용을 위한 tsconfig.json 셋팅변경부분
```
"target":"es6" /* 이건 안해도 되던데, js 로 변경후 보기 편하게? */
"module":"es2015" /* commonjs -> es2015 변경 */
```

## module 사용하기 위해서 다음을 지정
```html
<script type="module" ...
```
## module 은 ...
* 지연로딩 : 화면 위쪽에 있어도, html 이 모두 렌더링 된후 실행되기 때문에 모든 태그에 접근 가능
* 다른건 생각 안남
 
## 참조 : 
* 깃허브 <https://github.com/iamshaunjp/typescript-tutorial>
* 유튜브 <https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=1>

