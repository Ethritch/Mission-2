using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_2.Models
{
    public class grade_calc_model
    {
        [Range(0, 1, ErrorMessage = "Value must be a decimal between 0 and 1")]
        public decimal assignment { get; set; }

        public decimal gp { get; set; }

        public decimal qz { get; set; }

        public decimal exam { get; set; }

        public decimal intex { get; set; }
        
    }
}
