const spaces = (count) => {
      let space = " ";
      for (let i = 1; i < count; i++) {
          space += " ";
      };
      return space;
  };

  const stars = (count) => {
      let star = "*";
      for (let j = 1; j < count; j++) {
          star += "*";
      };
      return star;
  };


  const diamond = (n) => {
      let triangle = '';
      if (n % 2 === 0) {
          n = n + 1;
      }
      let sp = n/2,
          st = 1;
      const counter = (n + 1) / 2;
      for (let x = 1; x <= counter; x++) {
          triangle += spaces(sp) + stars(st) + '\n';
          sp = sp - 1;
          st = st + 2;
          if (x === counter) {
              let strev = st - 2,
                  sprev = sp + 1;
              for (let a = counter; a < n; a++) {
                  sprev = sprev + 1;
                  strev = strev - 2;
                  triangle += spaces(sprev) + stars(strev) + '\n';
              };
          }

      };
      return triangle;
  };

  console.log(diamond(15));
