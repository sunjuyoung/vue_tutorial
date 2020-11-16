module.exports= {
    pwa:{
        workboxOptions:{
            //프리캐시 파일 지정
            include:[/^index\html$/,/\.css$/,/\.js$/,/^manifest\.json$/,/\.png$/],
            //exclude는  없더라도 반드시 기입해야 작동
            exclude:[]
        }
    }
}