const APK_DOWNLOAD_URLS = {
  arm64: 'https://libra321.oss-cn-huhehaote.aliyuncs.com/heartnote_apk/app-arm64-v8a-release.apk',
  arm32: 'https://libra321.oss-cn-huhehaote.aliyuncs.com/heartnote_apk/app-armeabi-v7a-release.apk',
  x86_64: 'https://libra321.oss-cn-huhehaote.aliyuncs.com/heartnote_apk/app-x86_64-release.apk',
};

export const downloadApk = (variant: 'arm64' | 'arm32' | 'x86_64') => {
  window.open(APK_DOWNLOAD_URLS[variant], '_blank');
};

export const downloadDefault = () => downloadApk('arm64');