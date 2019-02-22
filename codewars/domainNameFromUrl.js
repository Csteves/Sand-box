function domainName(url){
    return url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)[1].split('.')[0]
  }