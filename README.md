# Homebridge Hikvision NVR plugin

Example Config:
```json
{  
   "platform": "Hikvision-NVR-Syno",  
   "name": "Hikvision-NVR-Syno",  
   "secure": false,  
   "host": "192.168.1.199",  
   "port": 80,  
   "username": "admin",  
   "password": "Secure_password_here",  
   "motionRetriggerInSeconds": 60,
   "videoProcessor": "/var/packages/ffmpeg/target/bin/ffmpeg"
}
```


videoProcessor?: optional
