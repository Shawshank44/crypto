const crypto = require('crypto');
        // Create password hash using Password based key derivative function 2
        function hashPassword(password) {
            const salt = crypto.randomBytes(16).toString('hex');
            const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
            return [salt, hash].join('%');
        }

      // Checking the password hash
      function verifyHash(password, original) {
      const originalHash = original.split('%')[1];
      const salt = original.split('%')[0];

            const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
            console.log(`this is verifing hash ${hash}`)
            if (hash === originalHash)
                return true;
            else
                return false;

      }

      let hash = hashPassword('test4');
      console.log('HASH = '+ hash);
      console.log(verifyHash('test4',hash));
      console.log(verifyHash('test1',hash));




    //   function verifyHash(password, original) {
    //     const originalHash = original.split('$')[1];
    //       const salt = original.split('$')[0];
  
    //           const hash = crypto.pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
  
    //           if (hash === originalHash)
    //               return true;
    //           else
    //               return false;
  
    //     }