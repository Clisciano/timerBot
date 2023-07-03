import * as schedule from "node-schedule";
import { exec } from 'child_process';


// const data = new Date(2023, 6, 3, 15, 27,0)

const rule = new schedule.RecurrenceRule();
rule.hour = 16;
rule.minute = 39;

const task = () => {
    exec('./script.php', (error, stdout, stderr) => {
        if(error) {
          console.error(`Erro ao executar script PHP: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        console.log('Script PHP executado com sucesso');
        console.log('Output:', stdout);
    
      });

    // console.log('Olá mundo!')
}

const job = schedule.scheduleJob(rule, task)

console.log(job.nextInvocation())