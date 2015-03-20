package gov.va.escreening.test;

import static com.google.common.base.Preconditions.checkNotNull;
import gov.va.escreening.test.TestAssessmentVariableBuilder.CustomAvBuilder;
import gov.va.escreening.test.TestAssessmentVariableBuilder.FreeTextAvBuilder;
import gov.va.escreening.test.TestAssessmentVariableBuilder.MatrixAvBuilder;
import gov.va.escreening.test.TestAssessmentVariableBuilder.SelectAvBuilder;
import gov.va.escreening.test.TestAssessmentVariableBuilder.TableQuestionAvBuilder;
import gov.va.escreening.variableresolver.AssessmentVariableDto;

import java.util.List;

import javax.annotation.Nullable;

/**
 * Decorator of {@link AssessmentVariableBuilder}
 * 
 * @author Robin Carnow
 *
 */
public class ForwardingAssessmentVariableBuilder implements AssessmentVariableBuilder{
	private AssessmentVariableBuilder delegate;
	
	protected ForwardingAssessmentVariableBuilder(AssessmentVariableBuilder delegate){
		this.delegate = checkNotNull(delegate);
	}

	protected AssessmentVariableBuilder getRootBuilder(){
		return delegate;
	}
	
	@Override
	public FreeTextAvBuilder addFreeTextAV(int id, String measureText, String response){
		return delegate.addFreeTextAV(id, measureText, response);
	}
	
	@Override
	public CustomAvBuilder addCustomAV(int id) {
		return delegate.addCustomAV(id);
	}
	
	@Override
	public SelectAvBuilder addSelectOneAV(@Nullable Integer avId, @Nullable String questionText) {
		return delegate.addSelectOneAV(avId, questionText);
	}

	@Override
	public SelectAvBuilder addSelectMultiAV(@Nullable Integer avId, @Nullable String questionText) {
		return delegate.addSelectMultiAV(avId, questionText);
	}

	@Override
	public MatrixAvBuilder addSelectOneMatrixAV(Integer avId,
			String questionText) {
		return delegate.addSelectOneMatrixAV(avId, questionText);
	}

	@Override
	public MatrixAvBuilder addSelectMultiMatrixAV(Integer avId,
			String questionText) {
		return delegate.addSelectMultiMatrixAV(avId, questionText);
	}
	
	@Override
	public List<AssessmentVariableDto> getDTOs(){
		return delegate.getDTOs();
	}

	@Override
	public TableQuestionAvBuilder addTableQuestionAv(Integer avId,
			String questionText, boolean hasNone, Boolean noneResponse) {
		return delegate.addTableQuestionAv(avId, questionText, hasNone, noneResponse);
	}
}