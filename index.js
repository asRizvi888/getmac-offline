const os = require("os");
const { exec } = require("child_process");

const parseMac = (mac) => {
  return mac?.length === 17 ? mac : `0${mac}`;
};

const getMac = () => {
  const OS = os.type();
  const cmd = OS === "Windows_NT"
    ? `wmic nic where "NetConnectionID='Ethernet' and PhysicalAdapter='True'" get MACAddress | findstr /v MAC`
    : `ifconfig | grep -A 2 en0: | tail -n 1 | awk '{print $NF}'`;

  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      if (stderr) {
        reject(stderr);
      }
      const address = parseMac(stdout.toString().trim().replace("-", ":"));
      resolve(address);
    });
  });
};

module.exports = getMac;
