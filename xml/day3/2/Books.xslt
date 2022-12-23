<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">


<xsl:template match="books">

	<table style="background-color: lightblue" border="1">
		<tbody>
			<tr>
				<th>Author</th>
				<th>Title</th>
				<th>Price</th>
			</tr>
			<xsl:for-each select="book">
				<tr>
					<td><xsl:value-of select="author"></xsl:value-of></td>
					<td><xsl:value-of select="title"></xsl:value-of></td>
					<td><xsl:value-of select="price"></xsl:value-of></td>
				</tr>
			</xsl:for-each>
		</tbody>
	</table>
	



</xsl:template>







</xsl:stylesheet>