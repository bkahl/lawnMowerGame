/***************************************************************************
 *	Author:	Brad Kahl
 *	Date:	10.24.12
 *	Description: creates a dynamic quote that one can postion absolutely.
 **************************************************************************/

function createLawn(id, opts){
	var div, bin, startBinary,
		col = opts.col,
		row = opts.row,
		binary = [],
		attrId = "#"+opts.attrId;
		
	div	= '<table>';
		for( var r=1; r<=row; r++) {
			div += '<tr data-row="'+r+'">';
			for( var c=1; c<=col; c++) {
				var startBinary = 0;
				div += '<td data-row="'+r+'" data-col="'+c+'" data-binary="'+startBinary+'">'+startBinary+'</td>';
				binary.push(startBinary);
			}
			div += '</tr>';
		}
	div += '</table>';
	div += '<br />';
	
	$(id).append(div);
	
	$(attrId+" table tr td").click(function(){
		var updatedBinary= ($(this).data('binary') < 1) ? 1 : 0;
			
			if($(this).hasClass('mowed') === false){
				$(attrId+" table td.mowed").data('binary',startBinary).text(startBinary).removeClass('mowed');
				$(this).addClass('mowed')
			}else{
				$(this).removeClass('mowed');
			}
			
		$(this).data('binary',updatedBinary).text(updatedBinary);
		$('#binaryValue').html( 'binaryValue : '+$(id).getBinary() );
	});
	
	bin = binary.join("").toString();

	$('#binaryValue').html( 'binaryValue : '+$(id).getBinary() );
}

(function($){
    $.fn.lawnSize = function(options){
        var id = $(this), defaults, opts, attrId = this.attr('id');

		// default quote used if user doesn't input their own data	
		defaults = {
			attrId: attrId,
			col: 5,
			row: 5
		};

        opts = $.extend(true, defaults, options, attrId);

        createLawn(id, opts);
        
    };

    $.fn.getBinary = function(id){
        var id = $(this),
			binaryValue,
			binary = [];

		id.children().find("td").each(function(){
			binaryValue = $(this).data("binary");
			binary.push(binaryValue);
		});
		
		binary = binary.join("");
		
		return binary;

    };
	
}(jQuery));













