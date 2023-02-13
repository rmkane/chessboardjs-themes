import { Theme } from '../types';

const ThemeSymbol: Theme = {
  name: 'symbol',
  board: {
    black: '#58AC8A',
    white: '#FFFFFF',
  },
  icons: {
    bB: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEPElEQVR42u1cO1LzMBAWjyEwQ8DhBBzBRQ6QI6SkdNpUKWiZcUVrWqoUHCBHSJnSR8gRcgT/bH6vWTaSLfmVsdhvZgdPrMjW50/ehxSUEggEAoFAIBAIBF5g9m2bb8uYwWdzoacca0razc1Ndnd3x4lcC00l5F1dXelIy/CckGietpQgo5E2kdD2g20VcRpLhbYfZDUtEOqUCtFh2BI3Ho/xeCb0KfUsBMoUPjuOgbMpfKFG2myFNhbGOJpMXwKI6Q5VKiTnoO1KaPuvoiIGDIKgUnmsTfpXlRhS4lw8sOE727xP7wFeM6FpmY3jKJvSLP1LfPbMoJC95n3W2FhfqY9qDG2cBLflcpm9vr7WIfLgE4kFeU9PT8Vg4RgHPJlMTsiYTqcZAo5tSSTX8ILEAKctDuzi4sKKiJeXl4JAOHaZ0oTEdOjvxBin1u3trRMJTQhk0zkedJEAjRIIKiQFgU4I9CFnXvH3Xp8KZNceZNZiXWV+e3vLvr6+ftlutysIhGN+Hr7jQOYgCw/WA6wLR0X6SyDEe6Aoah8fHwVRcMzPu8SH3hPYgxPxi0CbqosQaBjI9fW1KNASe91ALi8vrRTZMoGDXEPeWFROChuNRq3kwgbbDJHAyPZ9h3Z/f3+iwsViUZs4cu1oqIWEzEWFbdYIlSfLn2uTCh8fHyvfjU2MXHPQO7kCrAWqkt1WdfNlCzv4UOKfNwmmG3rgSHmCpGqwkJpBkaAK0MYyjUuUZ1jpFGYijVdfTG0MCvVy0b0o7z88PBwHSol5f3+3mq7QBtpSEmmfyuM9MycbiKDOV6Oq8mvaQx/qdPuvd7v5Q52SWsgwjn1ogu29bwQmVVkJelxe9+NW5Zl93Xy5pdMXVINl/KbA8r5GzbF3BJpK+EACOAasNKPKuME5VKKO/D9FYBPnoXMmf4rAnswrAtcdV1t0FZ1BhDJh/qS3rAK9zz9b5W2CvCpsvSai6i+i02Ca3p9urTg5F9GRqWRvsH2uwrRs8OBIPj8/C0ehyMI7Og78HDIPw2/r0pwYl/s79DXlQ0oCbLMlKdSJwTmX7bsc6H3rLqhX3Z/mtbJXHW6Ji1SDPc0wEAhyqWr4VIaMggbNXIFgPOuAPrBPuC+4RhVpFkS2XgZLKBFn8Ki9GBtbq+WwQ19e9NzGtgm3hpjlmd4aGWOrTqVybcMz62QtpXcVwjupwwWn3tTnrEJ4j6C1ERg3eWg17qXTlTyjCmHAZf80woVMEiYdMCCGvm0iALhOWZhl+nVU1+orVSEjLs1vAm3DvwM3i78TQaPxnDr9/VtM+8D28Bf6gf40pGH2s8otpkmA4WH3so5sUiEQ9VzyvbkybDjS5Khzw8OL8j5MaRqmcWXZxDPPjftSX5kKXZcRZzkZVKlRxQNoGyt1xl0MsfJj9T86V/0w6Drx7hGzfCzyDywEAoFAIBAIBIK+8A9zAk3P50Dz3AAAAABJRU5ErkJggg=='],
    bK: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAFHUlEQVR42u1cPU7rQBC2hIREAbI4QY5AwQE4QkpKaKlS0CJR0UJL5YIDcISUlDlCjpAj+L0vePI+D7ObbLKbOLz5pGliszv77ez82aaqHA6Hw+FwOBwOx6/B9K+0Sp6dFifQCXQCfylulMwMAht1z8hp+4d2C3GL1ASen5+3Z2dnK5Hf+bfLy0snMEQgk+YW6BboPtAJ/E9x91cWBmGz7pojgKtA/qcFSXbtdPVRi9UhkITIo2szJ7EPVBltXdcrsh4eHtqnp6elPD4+rn6nKPzptH1jxFZ2fX3dhoBruOf09FTuv3L6vgPDyvre39+DBOIa7rm4uPh1kXjcHcNZxPG/BizmmasQbW2Q29vb1e+qYmkCwei5mzMUzZtu4w7qR+tO0UVi/jbv/q4OEfjx8fHj75hAtTGiy6QbO0WXhdJlrynHPKWGxbEj38XK70pgL2/EHHTEN4nosqlXe/VZMeJw5EQ2UL61jrBF4NfXl553ERtzC13u9mF5Op1YKvf29tbG8PLy0vNrKpquggisT/vA+/v7nmWyhSmrXv4d5ooBujKhvJbqu1lbNtnlCa2oiYWKWNdYeSFDiJDFI/+Te2Rz5DexGs4bMWZoPgis17pmkLgo5RMbbfKsFIgMHRMIkmFtkdZ9Ym18jAW4Zv0NWxx0QhIe0gNjMNHiFtTamhLW11OElYgprAX3WspbAQMbwsRb9/ImxjYwtqEBPUY5CZzwkeG8LIW80AZo3yhuAZYlBOnIzBULjvg2OjCJsg5yC5OcBE6tBVrpRopw4LGslK2L62G20m3J0+MYVjjNSeDCmjTkk1JENkMvQMM6truSp12KkWTn7xjz0dlVeU0WR16O7kyuBIyQ/0wVXo/hQ/MTqOvSHGKNyZYh/qnE3DpoHSWBHFSk42JVJXIPW6oTaBwlicogUwgtNe/eCYzVq7uKDg44uhJ9xfpyBI4EgyiTxshCdWqxq8SS5pyRP1TFlExjXrleXFcd5DjGTFSp+awMgGri1+zPLU5OTn5MnNsKrVpZjm+u1EUEpOmNoTVm7w9OuRdXyiqELK5y9DOR3NYuRkB9xmlVADfaCsUX5rQMrpFjiXaugMW609qK9QQ/dUsrV00aIpCjZC4CucbWDd1S1vejqZqrK8Itd4huTzGB0kmOtehTyNNdoG5to6owxrGCPEQi/Ax8mNU1DgEksaOPAeNifMxjEPODvEAbrvgzkd6zXPaHFomhNnvsEQALiMC4oevrwEc+RB6toan2jCZGogYWgNQE92x7/DZxB8gfYw+VhkLexiTmLvxTCQ09ehgCeVESQw+NDiHwi0Mlr0fiMcgQyesFlljrHFaZEoVTgbHFzx4beb2mA78tsO6NhZLg0q/kM9/sjz+tpgOiMAIKoiSceyhX2zUCYw62con4pNNkqOSNLOeduwGa2m0JZAGjIRLYGC/qDEpIt8Ed4zrliEEkoFhivQiE30L3YywZV1xEtf7FykG95T9W/bRlJIy977zPQMJRmXQcDy6FEeVCxInFiLVAdDcmVXisdTWyIvB1SAROK+NtUiHokKUcdBCXUPKhUVYCD0lajMwhE9hU6R9MH0TWfCJxMNwcSy1c7eFd6J3KOMn6N/nUYJ/5H1dHQwsg2hKnVhGPWhSkljzmGBtzYC5FGPu9m+oIcNXVnJ9V+pdMy2YESGDRnzNsKItOh0l15P9npu52/q7LGZvOGiDzHaxuTuM03dh33Vz+PbHD4XA4HA6HwzFU/AGF19JO0JuFzQAAAABJRU5ErkJggg=='],
    bN: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEiUlEQVR42u2bO07DQBBALSEhUYCsnCBHSMEBfARKytBSpUiLlIo2tFRb0CJxBIsqdGnoc4QcwTCRFw2jnd2Ns78kM9IICTbBfp7/rqtKREREREREREREJKzcDfjM9Fc3v1qfOzwA0f2q2gNG038G9OPcAbYIBljUxLEe/r5Fn+n6h3CWsrOki4uL7urqCgNZMOtrDW80GuH1Ww/wJyngfn/wCESTS+/WX19f/61DINfnCLAzKVgkglJTa6XrLy8vz9KVG4PVmSC2/XplW49cuT4rgNgdLRCVBVpHvmcmAM0Qu7quOxfIPpMLQJM63BfHQu36H31GP8kMPTHctFHB8kjZwq5zxEfVP7iTka2v9Q3Vm5sbk+VuTiVjr31B3N/fO9fc3t7u1sFPLgQQi18fs0UuuLoO9PHxsXt5eemwuAC+vb39W79arbrn52efeLk8tvKn4SA8PT11JgE4LoAAi0LEn6dWTFwbrHF8LAA3pqwKVocFgPi4LqfwfRQoWLUlux9FTz21ZV+ABjceMpHAQ6AgaZxEGbx4iJvYmZfT+Xz+DyJ9UKhUKhbixJY4UihYHiQXD4hFTrtnhlme0VL0TcYCaYOIYmJbZOnCtWQ0icQESCHSmIi8ZFESwNY3PnH1W2h39nxYk6IB0hsBeX19TRITHx4e2P8JbWBprtz6dBC+hXMoxR0PAC112j3mbgDHIS3QkaTMzh6unH3OqLgMDLB0JoSiF+LhoUDAgvexYhyD6cNDSS+bFTapaz09TDgFK6y53jeWghUPiaO4jKJWmDMWLlPCw5l1SCLysMKk+8/THO2aHokNSURQf3IdCiquk9SFkxQje1uHQUuSfa2QxlCUAJfJxvU+m0GxSpIYLV6qZLLw3XGLVRQf0sngkoa2lOieornxOJfr6gx8yBTblUxQexfNjVXlf4qgWLVNr2O68fiYoXHZmLoxysbBN6FmuRJH6Ck3ntLQbIy8K3hR3braK27Te6jqAn2fMzYBi2oVGiCbPL6/v7uvr6/BtVllOLKBrS5Gp4OFue7gcZC9EIAHEA+9qRiW5jMntEzI66gAoR0CeKCHzPgMh8qVjrmx6k18SoL21ehBNlEBQkEL8N7f30PA2/ZFeo1jbqxBhZ7qmOIguqZFVIDwFE3HKXyLXstmd5Nij9mjHlRJkojt6Q6Al2zG6JFIgm44Kd+b0oWqZ89K4a1TzRjxhpclhqcf3Wvx6FunZESWDJ6O4R5brUEzsXMC/fn5ubsg+OnoKpZ0wpN6um3LxOg6gmZip4vZYh95N0R/X2uYhmQ50cWUMndVYPmDaMqSUBuati4Nr3jVqV12n1IGPcwo52fqCr1hBMUuZz3k9/j9OJUTngkgjtnouqIAxInF91DlkiakHFNtWynDAEzy0nfTA1obtgmVYUS+qQocrjLHj4s7R9jkmiu6ADK1YHEAVVXoeJ8BWNwLjpuc56hzdyMhsndRm1IYIDcYKS7+5SxdbAAt523KAliSHhvAmQAMcCyktD1ifeLVsjciAA9UASgABaAAFBEREREREREROT35AYJ+1rmwHNOKAAAAAElFTkSuQmCC'],
    bP: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACIUlEQVR42u2a8YmDMBjFBUHoH4p0AkdwhI7QERzBEdygIzhCR8gIjuAIjpAzPT2+BtvaRL3ky3vwQAoHx4+X5MvTKIIgCIIgCIIgCIIgKxWj29H9aEk8jL6PvgDRa900aDJNUxnHsdR+F6Nz4HpWNwPKskwH9vDpdKIwVSJLYCPJW0jaolUqp+ceSfzd01bDo2mcnm+hA7xrQL71EHoKTcFR6Negl69p+sjfNUEDJIcCAALgscpNTuDZ5/N5fq4xQBuYgC9CBlgpCEmSfAWP3FZE6MWBmKHkeW6SxD7UMaaahuDHUnx1/31nLbVtSAN1+6k4MNwLuxAgNrbAPow0Hfu5by+TJLItGHrL4uAbsxttjMYVi+G6ZVlbHWzUVpYHyoULvPLAvY+ORmxKBqvWBS0NAG6zhPc+gbnXXDhEPBtjBm5jzPWIZUwqMZbXOaHtUXumr+AIsJw7wJ3LBNbvSKqFzX5LeG3EXJeIfPtnOxsuFLI111K1jMj7D5WYLfdC7XAapqSzUUPB7Xkn1hItfD9Mcpq6Ld5/GOyJ3n6IqeB1kcWXBxvOhNK3Jf0H76gKa8W9WPqUROECvAWIXgzYzX8u2xXL2elPQQqXoL05WJz9FKQ9sji1cI/02Q/cznWFtUsHxwo7d2cWngF07hsa6aEB0PK+DIAACIAACIAACIAACIAA6AZAdZVT/6DLJrUWEsjpKgdBEARBEARBEARBvugHv8DETbTczG4AAAAASUVORK5CYII='],
    bQ: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAFY0lEQVR42u1cvW3zPBAWECBAigRCJvAILjKARnCZUmlTuUgbQFVap02lIgNoBJYpNYJG8Ah6c4bo73w+/hwlWXQ+HnBAEIs88uH9U3aWJUqUKFGiRIkSJUqU6E/Q+pebX+4J18Nn/yva/HKFuHA8X2LQ7u7u+tvbWwpk6ZijIDI31wrcntEi4M6gSYV+5uHh4Wwc+V9h0NzOIHN/TUAetej+/v6gRZqJNlEQOq11BhDwZ50JfJCBZcIaBNobhf/qbfz4+Ii1IsfjGHM9Y/SM1uJcazua28ZR+9HaZIKYkVZUw7itLwDome0wtiJzsozWVMcM4N5DAzArDIILePKMBl8JZe6XAicffE1hMYM+cDOFy/8xfrAIPLTe4n70/vIpgVtp02SiaTUSwJb6MQHwepPtSAArg+xmCn+5xpODnwEmzl6hzXQ+G0BaVJON9Dc3N8Zx6LOK+l0f7WUOrcXBSe+PHFQ5RvMO4OV57tpQM4zZuUAgnxdcEKIyifyaS2EEMjUgjS3yI5n7AYuwiGoCj1nYejjVzrQh0BL0/9o3kiPtamxjYG5OE5FMJQEd7b2eLaIyUdFYEXiAlxnqYAqAFUTL2Bxbik/UdwQeK0kdsyIR2wb2ziK3C9yIDZSWPKsmityzAZhlYbnYytNVSC1GLQFgqAlbAUROe2NoQrBVBfJHpWmcpRRUIRXT2OR7JwwiK6EGcwHBWJGg4LAT+k0OwI0wiFShlUfrmcbsAl1AHmBailmndMxRlkca046pTE6STWpaDr/k00woA2vps/aZo5mgTG03qoVknlHgUWGNpWOiAjWwpQHEZlZMK8u3lOO0dm/p9DRz9A5XnMqjE9tKAGR858alSUwgWQVmCDUny3BAk1LnWeA7AUSnXeEA4tmR3uExHn1ExXWvLVcOsxGbrBqaA74pQheQmylJ84IA6Lo62M19WcQKZ/p0kvZ8kckT28L3GoA2brkxyJxnv3zy1ShJEt765GVk860gGVY+9zWG1GpyajyrEqlGOZN232cMACoPf6ku0dq3XgD5aJHB9KUtfUkT1bo2JqDNf3UpBSpmvkT6Imo5BZrZrOy69rz0bV0dai4mwD2j6VFjZjiki94XbzxPddIAEqrhNl9pqctnvyMetfAF/Nvi6Us2QVc3Vm6XeFPB+32WWJl5z+aitBaaSHTscc+ybDpzJdxlC1IdS7CQciyvu22uFUC05kVf/c3/gAkvTs0Vg9fEAGAZWv8+Pz8f+PX1tX9/fxcxjNHjR9TFZQwAOi92np6eDpv++vrq5yaQAbJAZozVh4nYq0XYiI2+v7+PLNG+j4+Pk7E2gueXbJ760sntGJgVpc/Pz/7t7S3I5CQuAWSALEpaI5Gr2cYE4EmT9eXl5bDon5+fw99LBQmQDWsAYtaxyiKjk6oEnLx0w6AlOjCY2NO3nTBoJcn9VBYhOd94gs3DZrQP09oxhmAOmAvmhLltAFvezY6GVEgwsQUXzBLAryV4WDvV2hdSjdHaEmqS1OSxVlPSvu+SF+eT5YQ4mIT4xFAGWdcUPM7KOn3aoCFLR2Gt4UgD66jNN+b7YrS2KM24cyW5uuaFRNenipAEHJgT18gxN1GdibQ2H64iGBOFQwjWgN1IDG18Y0fGFn2xloR2UVxdHa3dXLrDROMyJgArnOnrvA9SizlrXx9gYQ04L0TVSBWtBsbMsWqg9Icflr4H3sfUCzzRQu2oYwIS1kLSqzKLlNifbdLfBp/79g7/Vozhwn+Sr/FfqqTbDoW7+Ech8NfvNQcm6PthDdvYSzgfQIvsv9+z0u8st9n4twr0XPUw93aQddWAJUqUKFGiRIkSJUr0p+kfuYdvNbgccMcAAAAASUVORK5CYII='],
    bR: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABm0lEQVR42u3bPW6DQBCG4ZWQkChAiBPkCCk4DCU1d0DyTSg4QI7gktJHyRGINkW0wZsfO1lmBr+fNOUK/GC8eJl1jhBCCCGEEEKsZ72x7h23/sMxAXxYwKZprhCKokg6NjLOLmDwgT/GlWWZdGxkHIAABnUH4E1jAfzj2KqqDjkL71YBMoAAAggggFYAu64Tq7Ztt7P3qynAcRxXyczzvL2gZ1OA/hsgmWEYtoAv2gEnf6JZlonfxpHb11dvYU0wiihVAd5kaWF1UoZ3sbg6PSnCq60u8V8hpoz/7fPHqOv6EHjRmXkPwOCh2Txe9NkwVVn716H27x2AAAIIIIAAAggggAACCCCAAAIIIIAA2lxQNZ9nYcDeOp5vpQgbvJO+C/7ilu4PgydYPXgPgvikFM8M4sl9fi+7LsuiqblI/cx8dora23ysPRtenKIGy3BmpsWXFl/ZHkGtgN9edU0tvj/sZpIDzPP8/eTC0gjot3qF57jZMiYH+Nt9vsoLQAABBBBAAA0CKl11sQN4kALQKiAhhBBCCCGEkN3zBrdN62F70/jOAAAAAElFTkSuQmCC'],
    wB: ['data:image/png;base64,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'],
    wK: ['data:image/png;base64,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'],
    wN: ['data:image/png;base64,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'],
    wP: ['data:image/png;base64,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'],
    wQ: ['data:image/png;base64,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'],
    wR: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6FJREFUeNrsnL1LI0EYxmcPQa0SG79AC8HOwsNGSHE5tBICVsF0uUb/Fm0OS9N4VwXSpAjYKHqNnXJC0gnhUEjQxlipVW6fxT3WZEyyOzu7E+95YCSZ5M2Mv8zXO/NOrHa7Lajg+kQEBEiABEiAFAESIAESIEWAkWtExdiyrM6sIH6hpWAXpMzuSiu4syM6vpWFhYWerz8/P4tGo+HbDnp4eHCSV+Pj42JmZqanXbPZFE9PT2a1wPe0s7PT8/V6vS4ODg5820EnJyfi+Pj4TR7g9bNFeSh3KABCiURCLC0tdeWfn5/3tJufnxdzc3Nd+Y+Pj6JWq/m2HcTOWICpVGoQgGnvEwCQ2d3e3naCSHe+R2YrsRsOgD50FrEdlzEfZhmjMkvv7u4Gsl1fX3fSfwsQA32/sVOm0dHRwLYfCuDW1lYgu8nJycC2HAPpC8evTu/F+C4Mdw1rsLh1d3fnBfhnKADC57y/vxfFYtGI1ufxgY0H2LJTslAoiO3tbcfJz+fzzgQQh8rlsri+vhaXl5faAIY9Bn4FROy0VCoVJwOtEK0xah0dHf2D59bF1s+wy7FU9sIk+4HQ8qublZydnXVaYjKZFLlcLrKWCHjwfwGvVCq52d/s9EP2fiUGGgC+C3FjY0OMjY1phVetVn3BMxWgC/E3HrgQMSZGIT/wVAHq9ESuXit/iDERO8Krq6tibW1N65Ll9PRUXFxcDAzPdFcOlT90n6D7yjZLNZdPT4SuHAFSBEiABEiAFAESIAESIEWABEiABEgRIAGaIN070m92oxFu2y/EV0X4fMhz9oIzGeeoVVeZOg+VAC+PB9lsVqysrETWKhCJgMP915sAV/0gmnYql7TT9054i4uLzrEm4vx0yg0pabVaA0M0DSC6zbIXHqL1AS8q+YVoEsBNO5UxBmUymVjgDQDxc5gAw55EnJYHcO6Yh7BbnRNHL01NTYmXlxfnUH9/fx8hbsumz8Jf8AeRCBjr8A/EHSPoxk1PTExoCbLUsoxBZQHPhJhmtH6dPUAVYFoyA5uutCTvV1wAz8TwSVZni65cTFJdxrQxYWDJ4hWun05PT0tva0YtTGI3NzfOMgaB7668UbQ2AyuuLuz4uLKL0rr9Xr/CF230ZgKumcquqZqovb290D6LYyABxqvQujAGa5PGvKEDiJkOicsYn8uYQX5yxER5f3pFZRmjDPAjtKLYAFKchQmQAAmQACkCJEACJECKAOPQXwEGAMzCnUci7uxxAAAAAElFTkSuQmCC'],
  },
};

export default ThemeSymbol;
