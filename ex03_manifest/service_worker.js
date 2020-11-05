//캐시 제목과 캐시할 파일 선언
const sCacheName = 'hello-pwa1'; 
const aFilesToCache=[
    './','./index.html','./manifest.json','./images/hello-pwa.png'
];

//서비스 워커 설치하고 캐시 파일 저장
self.addEventListener('install',pEvent=>{
    console.log('서비스워커 설치');
    pEvent.waitUntil(//설치완료되면 pEvent에 포함된 waitUntil함수를이용해 캐시에 필요한 파일 저장
        caches.open(sCacheName)
        .then(pCache=>{
            console.log('파일을 캐시에 저장');
            return pCache.addAll(aFilesToCache);
        })
    )
})

//서비스워커가 고유한 ID를 발급받아 브라우저에 등록되면 동작
//개발자 도구에서 확인가능
self.addEventListener('activate',pEvent=>{
    console.log('서비스워커 동작');
})

self.addEventListener('fetch',pEvent=>{
    pEvent.respondWith(
        caches.match(pEvent.request)
        .then(response=>{
            if(!response){
                console.log("네트워크에 데이터 요청",pEvent.request);
                return fetch(pEvent.request);
                
            }
            console.log('캐시에서 데이터 요청',pEvent.request);
            return response;
        })
        .catch(err=>console.log(err))

    );
});

