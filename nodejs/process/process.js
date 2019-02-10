/*process属性*/

console.log(process.execPath);
//C:\Program Files\nodejs\node.exe
console.log(process.version);
//v10.14.1
console.log(process.versions);
//{ http_parser: '2.8.0',
//   node: '10.14.1',
//   v8: '6.8.275.32-node.36',
//   uv: '1.23.2',
//   zlib: '1.2.11',
//   ares: '1.14.0',
//   modules: '64',
//   nghttp2: '1.34.0',
//   napi: '3',
//   openssl: '1.1.0j',
//   icu: '62.1',
//   unicode: '11.0',
//   cldr: '33.1',
//   tz: '2018e' }
console.log(process.platform);
//win32
console.log(process.env);   //环境变量
// { ALLUSERSPROFILE: 'C:\\ProgramData',
//   ANDROID_AVD_HOME: 'C:\\Users\\w2239\\.android\\avd',
//   ANDROID_SDK_ROOT: 'C:\\Users\\w2239\\AppData\\Local\\Android\\android-sdk',
//   APPDATA: 'C:\\Users\\w2239\\AppData\\Roaming',
//   CLASSPATH:
//    '.;C:\\Program Files (x86)\\Java\\jdk1.8.0_181\\lib;C:\\Program Files (x86)\\Java\\jdk1.8.0_181\\lib\\tools.jar',
//   COLORTERM: 'true',
//   CommonProgramFiles: 'C:\\Program Files\\Common Files',
//   'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
//   CommonProgramW6432: 'C:\\Program Files\\Common Files',
//   COMPUTERNAME: 'DESKTOP-LSTH86T',
//   ComSpec: 'C:\\WINDOWS\\system32\\cmd.exe',
//   cudabin:
//    'C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0\\bin',
//   CUDA_PATH:
//    'C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0',
//   CUDA_PATH_V8_0:
//    'C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0',
//   DEBUG_COLORS: 'true',
//   DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
//   ELECTRON_NO_ATTACH_CONSOLE: 'true',
//   FORCE_COLOR: 'true',
//   FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
//   FPS_BROWSER_USER_PROFILE_STRING: 'Default',
//   GoLand: 'C:\\Program Files\\JetBrains\\GoLand 2018.3.3\\bin;',
//   GOPATH: 'C:\\Users\\w2239\\go',
//   GOROOT: 'C:\\Go\\',
//   HOMEDRIVE: 'C:',
//   HOMEPATH: '\\Users\\w2239',
//   Java_Home: 'C:\\Program Files (x86)\\Java\\jdk1.8.0_181',
//   LOCALAPPDATA: 'C:\\Users\\w2239\\AppData\\Local',
//   LOGONSERVER: '\\\\DESKTOP-LSTH86T',
//   MOCHA_COLORS: '1',
//   MYSQLCONNECTOR_ASSEMBLIESPATH:
//    'C:\\Program Files (x86)\\MySQL\\Connector NET 8.0\\Assemblies\\v4.5.2',
//   NO_XILINX_DATA_LICENSE: 'HIDDEN',
//   npm_config_color: 'always',
//   NUMBER_OF_PROCESSORS: '4',
//   NVCUDASAMPLES8_0_ROOT: 'C:\\ProgramData\\NVIDIA Corporation\\CUDA Samples\\v8.0',
//   NVCUDASAMPLES_ROOT: 'C:\\ProgramData\\NVIDIA Corporation\\CUDA Samples\\v8.0',
//   NVTOOLSEXT_PATH: 'C:\\Program Files\\NVIDIA Corporation\\NvToolsExt\\',
//   OneDrive: 'C:\\Users\\w2239\\OneDrive',
//   OneDriveConsumer: 'C:\\Users\\w2239\\OneDrive',
//   OS: 'Windows_NT',
//   Path:
//    'C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0\\bin;C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0\\libnvvp;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files\\Git\\cmd;C:\\python3.6\\Lib\\site-packages\\django\\bin;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\Tesseract-OCR;C:\\Program Files (x86)\\Windows Kits\\10\\Windows Performance Toolkit\\;C:\\Users\\w2239\\Anaconda3\\Scripts;C:\\Program Files (x86)\\mingw-w64\\i686-7.2.0-posix-dwarf-rt_v5-rev1\\mingw32\\bin;C:\\Program Files\\nodejs\\;C:\\Users\\w2239\\AppData\\Local\\Android\\android-sdk\\platform-tools;C:\\Users\\w2239\\AppData\\Local\\Android\\android-sdk\\tools;%ANDROID_HOME%\\tools;%ANDROID_HOME%\\platform-tools;C:\\Go\\bin;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0\\bin;C:\\python3.6\\Scripts\\;C:\\python3.6\\;C:\\Users\\w2239\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Program Files (x86)\\mingw-w64;C:\\python3.6\\Lib\\site-packages\\django\\bin;C:\\Users\\w2239\\AppData\\Local\\Microsoft\\WindowsApps;C:\\python3.6\\Lib\\site-packages\\django\\bin;C:\\Program Files (x86)\\sqlite;E:\\phantomjs-2.1.1-windows\\bin;D:\\getdriver;C:\\python3.6\\Scripts\\__pycache__;D:\\Tesseract-OCR;C:\\Users\\w2239\\AppData\\Local\\Programs\\Fiddler;C:\\Qt\\Qt5.10.1\\5.10.1\\msvc2015\\bin;C:\\Qt\\Qt5.10.1\\Tools\\QtCreator\\bin;C:\\Qt\\Qt5.10.1\\Tools\\QtCreator\\lib\\qtcreatorcdbext32;C:\\Windows\\SysWOW64;C:\\Qt\\Qt5.10.1\\5.10.1\\msvc2015\\lib;C:\\Qt\\Qt5.10.1\\5.10.1\\msvc2015\\lib;C:\\Qt\\Qt5.10.1\\5.10.1\\msvc2015_64\\lib;E:\\新建文件夹;C:\\Program Files (x86)\\Java\\jdk1.8.0_181\\bin;C:\\Program Files (x86)\\Java\\jre1.8.0_181\\bin;E:\\android\\android-sdk-windows\\platform-tools;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Windows\\System32;C:\\Windows\\SysWOW64;C:\\Program Files\\JetBrains\\WebStorm 2018.3\\bin;;C:\\Users\\w2239\\AppData\\Roaming\\npm;C:\\Users\\w2239\\AppData\\Local\\Android\\android-sdk\\platform-tools;C:\\Users\\w2239\\AppData\\Local\\Android\\android-sdk\\tools;C:\\Program Files\\nodejs\\node_modules\\npm\\bin;C:\\Program Files\\nodejs\\node_modules\\npm\\scripts;C:\\Users\\w2239\\go\\bin;C:\\Program Files\\JetBrains\\GoLand 2018.3.3\\bin;;C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0\\bin;',
//   PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
//   PROCESSOR_ARCHITECTURE: 'AMD64',
//   PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 94 Stepping 3, GenuineIntel',
//   PROCESSOR_LEVEL: '6',
//   PROCESSOR_REVISION: '5e03',
//   ProgramData: 'C:\\ProgramData',
//   ProgramFiles: 'C:\\Program Files',
//   'ProgramFiles(x86)': 'C:\\Program Files (x86)',
//   ProgramW6432: 'C:\\Program Files',
//   PSModulePath:
//    ';C:\\Program Files\\google app\\google-cloud-sdk\\platform\\PowerShell;C:\\Users\\w2239\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell',
//   PUBLIC: 'C:\\Users\\Public',
//   Scrapy: 'C:\\Users\\w2239\\Desktop\\项目\\python\\测试\\venv\\Scripts',
//   SESSIONNAME: 'Console',
//   SystemDrive: 'C:',
//   SystemRoot: 'C:\\WINDOWS',
//   TEMP: 'C:\\Users\\w2239\\AppData\\Local\\Temp',
//   TESSDATA_PREFIX: 'D:\\Tesseract-OCR\\tessdata',
//   TMP: 'C:\\Users\\w2239\\AppData\\Local\\Temp',
//   USERDOMAIN: 'DESKTOP-LSTH86T',
//   USERDOMAIN_ROAMINGPROFILE: 'DESKTOP-LSTH86T',
//   USERNAME: 'w2239',
//   USERPROFILE: 'C:\\Users\\w2239',
//   VS140COMNTOOLS:
//    'C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\Tools\\',
//   VSSDK140Install:
//    'C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\VSSDK\\',
//   WebStorm: 'C:\\Program Files\\JetBrains\\WebStorm 2018.3\\bin;',
//   windir: 'C:\\WINDOWS' }

/*stdio stdout使用*/
process.stdin.resume();
process.stdin.on('data',function (chunk) {
    process.stdout.write('进程收到数据'+chunk);
});
//2412415fqwf
// 进程收到数据2412415fqwf
// 21431gfsgs
// 进程收到数据21431gfsgs
// jtruy54ythbtbh
// 进程收到数据jtruy54ythbtbh

/*方法与事件*/
//memoryUsage()
console.log(process.memoryUsage());
//{ rss: 19501056,
//   heapTotal: 6537216,
//   heapUsed: 3816120,
//   external: 8272 }
//nextTick
function foo() {
    console.log("foo function");
}
process.nextTick(foo);
console.log('bar');
//bar
// foo function

var fs=require('fs');
function finish() {
    console.log('文件读取完毕');
}
process.nextTick(finish);
console.log(fs.readFileSync('./promise.js').toString());
//文件内容
//文件读取完毕

//chdir() cwd()
console.log(process.cwd());
process.chdir('./2');
console.log(process.cwd());
//C:\Users\w2239\Desktop\project\webstorm\2019
// C:\Users\w2239\Desktop\project\webstorm\2019\2